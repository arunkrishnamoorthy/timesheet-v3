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
        let filters = availabilityAPI.schema.COMPANY_CODE.equals('9034');
        let count = await availabilityAPI.requestBuilder().getAll().filter(filters).count().execute(destination);
        const resultPromise = await availabilityAPI.requestBuilder().getAll().skip(skip).top(top).execute(destination);
        let result = resultPromise.map((result) => {
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