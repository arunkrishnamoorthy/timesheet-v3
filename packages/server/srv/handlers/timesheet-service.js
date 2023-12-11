const cds = require('@sap/cds');
const UserFactory  = require('../helpers/utils/users');
const destination = { destinationName: 'S4HC_BTP_DEST' };
const { Yy1_DummyprojectApi } = require('../lib/YY1_DUMMYPROJECT_CDS/Yy1_DummyprojectApi');
const { Yy1_TimeSheetTaskTypeApi } = require('../lib/YY1_TimeSheetTaskType_CDS/Yy1_TimeSheetTaskTypeApi');
const { Yy1_ProjectStaffing_2Api } = require('../lib/YY1_PROJECTSTAFFING_2_CDS/Yy1_ProjectStaffing_2Api');
const { or, and } = require('@sap-cloud-sdk/odata-v2');

module.exports = async (srv) => {
    
    // const dummyproject = await cds.connect.to("YY1_DUMMYPROJECT_CDS");

    /**
     * Set the logged in user information
     */
    srv.before("*", "*", async (req) => {
        if(process.env.NODE_ENV === 'development') {
            req.user.id = process.env.TEST_USER;
        } 
        let userEmail = req.user.id;
        let user = UserFactory.getInstance();
        if(user.isUserExists()){
            let userDetail = await cds.connect.to("YY1_CurrentUserAPI2_CDS");
            let userInfo  = await userDetail.run(SELECT("YY1_CurrentUserAPI2").where({ UserName: userEmail }));
            user.setLoggedInUser(userInfo[0]);
        }
    });

    /**
     * Get Project Details
     */
    srv.on("READ","Projects", async(req) => {
        let result = [];
        let user = UserFactory.getInstance(req.user.id);
        let PersonWorkAgreement = user.getPersonalWorkAgreement(); 
        let CostCenter = user.getCostCenter(); 
        let personWorkAgreementFilter = [];
        let costCenterFilter = [];
        let yearFilter = [];
        let monthFilter = [];

        let staffingApi = new Yy1_ProjectStaffing_2Api();
        personWorkAgreementFilter.push(staffingApi.schema.EMPLOYMENT_INTERNAL_ID.equals(PersonWorkAgreement));
        costCenterFilter.push(staffingApi.schema.COST_CENTER.equals(CostCenter));
        yearFilter.push(staffingApi.schema.FISCAL_YEAR.equals('2023'));
        monthFilter.push(staffingApi.schema.FISCAL_PERIOD.equals('12'));
        // filters: CostCenter,EmployeeInternalId,FiscalPeriod, FiscalYear
        let staffingdata = await staffingApi.requestBuilder()
        .getAll()
        .filter(
            and(
                or(...personWorkAgreementFilter),
                or(...costCenterFilter),
                or(...yearFilter),
                or(...monthFilter)
            )
        )
        .execute(destination);
        result = staffingdata.map((staffing) => {
            return {
                ID: staffing.id,
                ProjectName: staffing.workPackage,
                ProjectDescription: staffing.workPackageName
            }
        });
        return result;
    });

    /**
     * Get Dummy Projects
     */
    srv.on("READ", "DummyProjects", async(req) => {
        let result = [];
        let user = UserFactory.getInstance(req.user.id);
        let PersonWorkAgreement = user.getPersonalWorkAgreement();  
        let personWorkAgreementFilter = [];
        let dummyprojectapi = new Yy1_DummyprojectApi();
        personWorkAgreementFilter.push(dummyprojectapi.schema.PERSONNEL_NUMBER.equals(PersonWorkAgreement)); 
        let dummyproject = await dummyprojectapi.requestBuilder()
            .getAll()
            .filter(
                and(
                    or(...personWorkAgreementFilter)
                )
            )
            .execute(destination);
        result = dummyproject.map((dummy) => {
            return {
                ID: dummy.sapUuid,
                ProjectName: dummy.projectName,
                ProjectDescription: dummy.projectDescription
            }
        });
        return result;
    });

    /**
     * Get general projects
     */
    srv.on("READ","GeneralProjects", async() => {
        let result = [];
        const taskapi  = new Yy1_TimeSheetTaskTypeApi();
        let languageFilters = [];
        languageFilters.push(taskapi.schema.LANGUAGE.equals('EN'));
        let tasks = await taskapi.requestBuilder()
            .getAll()
            .filter(...languageFilters)
            .execute(destination);
        result = tasks.map((task) => {
            return {
                ID: task.timeSheetTaskType,
                ProjectName: task.timeSheetTaskType1,
                ProjectDescription: task.timeSheetTaskTypeText
            }
        })
        return result;
    });
}