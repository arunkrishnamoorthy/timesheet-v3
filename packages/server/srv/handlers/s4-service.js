const cds = require('@sap/cds');
const UserFactory  = require('../helpers/users');

module.exports = async (srv) => {

    const dummyproject = await cds.connect.to("YY1_DUMMYPROJECT_CDS");
    const projecttime = await cds.connect.to("YY1_DUMMYPROJECTTIME3_CDS");

    /**
     * 
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
     * Get Dummy Project
     */
    srv.on("READ", "YY1_DUMMYPROJECT", (req) => {
        let user = UserFactory.getInstance(req.user.id);
        let PersonWorkAgreement = user.getPersonalWorkAgreement();
        let where = cds.parse.expr(`PersonnelNumber = ${PersonWorkAgreement}`);
        //TODO: The person work agreement has to be added to the filter        
        return dummyproject.tx(req).run(req.query);
    });

    /**
     * Get Dummy project time
     */
    srv.on("READ", "YY1_DUMMYPROJECTTIME3", (req) => {
        const projecttimedata = projecttime.tx(req).run(req.query);
        return projecttimedata;
    });
}