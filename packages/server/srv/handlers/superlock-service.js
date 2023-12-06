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
        let aCountryFilters = filterParser.getFilterByProperty("Country");
        let country = aCountryFilters[0]?.value || 'BE';
        let aEndDateFilters = filterParser.getFilterByProperty("EndDate");
        let endDate = null;
        if(aEndDateFilters){
            endDate = new Date(aEndDateFilters[0]?.value);
        } else {
            endDate = new Date();
        }
        let yearMonth = endDate.getFullYear().toString() + ( endDate.getMonth() + 1 ); 
        let aPeronnelNumberFilters = filterParser.getFilterByProperty("PersonnelNumber");
        let aEmployeeTypeFilters = filterParser.getFilterByProperty("EmployeeType");
        let aUnitFilters = filterParser.getFilterByProperty("Unit");
        let currentUserApi = new Yy1_CurrentUserApi2Api();
        let availabilityAPI = new Yy1_Wa_AvailabilityApi();
        let count = await currentUserApi.requestBuilder()
                                        .getAll()
                                        .filter(
                                            currentUserApi.schema.COUNTRY.equals(country)
                                        )
                                        .count()
                                        .execute(destination);
        let employeeData = await currentUserApi.requestBuilder()
                                               .getAll()
                                               .filter(
                                                currentUserApi.schema.COUNTRY.equals(country)
                                               )
                                               .skip(skip)
                                               .top(top)
                                               .execute(destination);
        let periodFilter = [];
        periodFilter.push(availabilityAPI.schema.YEAR_MONTH.equals(yearMonth));
        let companyFilters = [];
        let aCompanyCodes = companyCode.getCompanyCodeByCountry(country);
        aCompanyCodes.forEach((value) => {
            companyFilters.push(availabilityAPI.schema.COMPANY_CODE.equals(value));
        });
        let employeeFilter = [];
        employeeData.forEach((employee) => {
            employeeFilter.push(availabilityAPI.schema.PERSON_WORK_AGREEMENT.equals(employee.personWorkAgreement))
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
        // const availabilityData = await availabilityAPI.requestBuilder()
        //                                            .getAll()
        //                                            .filter(and
        //                                             (
        //                                             or(...employeeFilter),
        //                                             or(...periodFilter),    
        //                                             or(...companyFilters)
        //                                             ))
        //                                            .execute(destination);
        let result = employeeData.map((employee) => {
            return {
                PersonnelNumber: employee.personWorkAgreement,
                PersonFullName: employee.personFullName,
                PersonExternalID: employee.userId,  
                CompanyCode: '9034',
                BusinessPartnerRole: employee.businessPartnerRole,
                BusinessPartnerRoleShortName: '',
                BusinessPartner: employee.businessPartner,
                AvailabilityInHours: "",
                CostCenter: employee.costCenter,
                CostCenterName: '',
                EndDate: employee.endDate,
                Country: "NL",
                LockStatus: "Not Locked",
                Unit: "S",
                Reason: "Not Locked",
                EmployeeType: "Internal"
            }
        });
        // availabilityData.map((result) => {
        //     return {
        //         PersonnelNumber: result.personWorkAgreement1,
        //         PersonFullName: result.personFullName,
        //         PersonExternalID: result.personExternalId,  
        //         CompanyCode: result.companyCode,
        //         BusinessPartnerRole: result.businessPartnerRole,
        //         BusinessPartnerRoleShortName: result.businessPartnerRoleShortName,
        //         BusinessPartner: result.businessPartner,
        //         AvailabilityInHours: "",
        //         CostCenter: result.costCenter,
        //         CostCenterName: result.costCenterName,
        //         EndDate: result.endDate,
        //         Country: "NL",
        //         LockStatus: "Not Locked",
        //         Unit: "S",
        //         Reason: "Not Locked",
        //         EmployeeType: "Internal"
        //     }
        // });

        result.$count = count;
        return result;
    }); 
}