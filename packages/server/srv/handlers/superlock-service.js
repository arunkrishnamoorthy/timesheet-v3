const cds = require('@sap/cds');
const UserFactory  = require('../helpers/utils/users');
const CompanyCodeFactory = require('../helpers/determinations/companycode');
const { Yy1_Wa_AvailabilityApi } = require('../lib/YY1_WA_AVAILABILITY_CDS/Yy1_Wa_AvailabilityApi');
const destination = { destinationName: 'S4HC_BTP_DEST' };
const { or, and } = require('@sap-cloud-sdk/odata-v2');

module.exports = async (srv) => {

    /**
     * Initialization
     */
    let companyCode = CompanyCodeFactory.getInstance();
    

    /**
     * Get the employee data for superlock
     */
    srv.on("READ","EmployeeData", async (req) => {
        // Possible filters: YearMonth, Status, Country
        let top = req._queryOptions?.$top || 100;
        let skip = req._queryOptions?.$skip || 0;
        let availabilityAPI = new Yy1_Wa_AvailabilityApi();
        let periodFilter = [];
        periodFilter.push(availabilityAPI.schema.YEAR_MONTH.equals('202312'));
        let companyFilters = [];
        let aCompanyCodes = companyCode.getCompanyCodeByCountry('NL');
        aCompanyCodes.forEach((value) => {
            companyFilters.push(availabilityAPI.schema.COMPANY_CODE.equals(value));
        });
        let count = await availabilityAPI.requestBuilder()
                                         .getAll()
                                         .filter(and
                                            (
                                            or(...periodFilter),    
                                            or(...companyFilters)
                                          ))
                                         .count()
                                         .execute(destination);
        const availabilityData = await availabilityAPI.requestBuilder()
                                                   .getAll()
                                                   .filter(and
                                                    (
                                                    or(...periodFilter),    
                                                    or(...companyFilters)
                                                    ))
                                                   .skip(skip)
                                                   .top(top)
                                                   .execute(destination);
        let result = availabilityData.map((result) => {
            return {
                PersonnelNumber: result.personWorkAgreement1,
                PersonFullName: result.personFullName,
                PersonExternalID: result.personExternalId,  
                CompanyCode: result.companyCode,
                BusinessPartnerRole: result.businessPartnerRole,
                BusinessPartnerRoleShortName: result.businessPartnerRoleShortName,
                BusinessPartner: result.businessPartner,
                AvailabilityInHours: "",
                CostCenter: result.costCenter,
                CostCenterName: result.costCenterName,
                EndDate: result.endDate,
                Country: "",
                LockStatus: ""
            }
        });
        result.$count = count;
        return result;
    }); 
}