const cds = require('@sap/cds');
const UserFactory  = require('../helpers/utils/users');
const FilterParser = require('../helpers/utils/filterParser');
const CompanyCodeFactory = require('../helpers/determinations/companycode');
const { Yy1_Wa_AvailabilityApi } = require('../lib/YY1_WA_AVAILABILITY_CDS/Yy1_Wa_AvailabilityApi');
const { Yy1_CurrentUserApi2Api } = require('../lib/YY1_CurrentUserAPI2_CDS/Yy1_CurrentUserApi2Api');
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
        let where = req.query.SELECT.where;

        let filterParser = new FilterParser(where);
        let aEndDateFilters = filterParser.getFilterByProperty("EndDate");
        let aPeronnelNumberFilters = filterParser.getFilterByProperty("PersonnelNumber");
        let aEmployeeTypeFilters = filterParser.getFilterByProperty("EmployeeType");
        let aUnitFilters = filterParser.getFilterByProperty("Unit");
        let currentUserApi = new Yy1_CurrentUserApi2Api();
        let availabilityAPI = new Yy1_Wa_AvailabilityApi();
        let count = await currentUserApi.requestBuilder()
                                        .getAll()
                                        .filter(
                                            currentUserApi.schema.COUNTRY.equals('BE')
                                        )
                                        .count()
                                        .execute(destination);
        let periodFilter = [];
        periodFilter.push(availabilityAPI.schema.YEAR_MONTH.equals('202312'));
        let companyFilters = [];
        let aCompanyCodes = companyCode.getCompanyCodeByCountry('NL');
        aCompanyCodes.forEach((value) => {
            companyFilters.push(availabilityAPI.schema.COMPANY_CODE.equals(value));
        });
        // let count = await availabilityAPI.requestBuilder()
        //                                  .getAll()
        //                                  .filter(and
        //                                     (
        //                                     or(...periodFilter),    
        //                                     or(...companyFilters)
        //                                   ))
        //                                  .count()
        //                                  .execute(destination);
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
                Country: "NL",
                LockStatus: "Not Locked",
                Unit: "S",
                Reason: "Not Locked",
                EmployeeType: "Internal"
            }
        });
        result.$count = count;
        return result;
    }); 
}