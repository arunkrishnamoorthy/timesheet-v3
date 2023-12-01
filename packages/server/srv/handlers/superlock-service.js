const cds = require('@sap/cds');
const UserFactory  = require('../helpers/users');
const { Yy1_Wa_AvailabilityApi } = require('../lib/YY1_WA_AVAILABILITY_CDS/Yy1_Wa_AvailabilityApi');
const destination = { destinationName: 'S4HC_BTP_DEST' };

module.exports = async (srv) => {

    /**
     * Get the employee data for superlock
     */
    srv.on("READ","EmployeeData", async (req) => {
        // Possible filters: YearMonth, Status, Country
        let top = req._queryOptions?.$top || 100;
        let skip = req._queryOptions?.$skip || 0;
        let availabilityAPI = new Yy1_Wa_AvailabilityApi();
        let count = await availabilityAPI.requestBuilder().getAll().count().execute(destination);
        const resultPromise = await availabilityAPI.requestBuilder().getAll().skip(skip).top(top).execute(destination);
        let result = resultPromise.map((result) => {
            return {
                PersonnelNumber: result.PersonWorkAgreement_1,
                PersonFullName: "",
                PersonExternalID: result.PersonExternalID,  
                CompanyCode: result.CompanyCode,
                BusinessPartnerRole: result.BusinessPartnerRole,
                BusinessPartnerRoleShortName: "",
                AvailabilityInHours: result.AvailabilityInHours,
                CostCenter: result.CostCenter,
                CostCenterName: "",
                EndDate: "",
                Country: "",
                LockStatus: ""
            }
        });
        result.$count = count;
    }); 
}