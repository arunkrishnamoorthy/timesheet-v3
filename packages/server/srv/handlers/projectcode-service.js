const cds = require('@sap/cds');

module.exports = async (srv) => {

    const dummyproject = await cds.connect.to("YY1_DUMMYPROJECT_CDS");
    const projecttime = await cds.connect.to("YY1_DUMMYPROJECTTIME3_CDS");
    const staffing = await cds.connect.to("YY1_PROJECTSTAFFING_2_CDS");


    /**
     * Get Project codes
     */
    srv.on("READ", "ProjectCodes", async (req, res) => {

        /** Replace the field names in CAP service, to match with S4 cloud field names  */
        let whereExpression = req.query.SELECT.where;
        if (whereExpression) {
            let jsonString = JSON.stringify(whereExpression);
            jsonString = jsonString.replace(/"PERSON_NUMBER"/g, '"PersonnelNumber"');
            jsonString = jsonString.replace(/"CUSTOMER"/g, '"Customer"');
            jsonString = jsonString.replace(/"PROJECT_NAME"/g, '"ProjectName"');
            whereExpression = JSON.parse(jsonString);
        }
        let orderbyExpression = req.query.SELECT.orderBy;
        if (orderbyExpression) {
            orderbyExpression = orderbyExpression.filter((expression) => expression["ref"]?.at(0) !== "ID");
            let jsonString = JSON.stringify(orderbyExpression);
            jsonString = jsonString.replace(/"PERSON_NAME"/g, '"PersonFullName"');
            jsonString = jsonString.replace(/"CUSTOMER_NAME"/g, '"CustomerName"');
            jsonString = jsonString.replace(/"PROJECT_NAME"/g, '"ProjectName"');
            orderbyExpression = JSON.parse(jsonString);
        }

        let aStaticFilters = [
            {
                "ref": [
                    "DummyProjectStatus"
                ]
            },
            "!=",
            {
                "val": "Closed"
            }
        ];
        if (whereExpression) {
            aStaticFilters = [...aStaticFilters, 'and', ...whereExpression]
        }
        let dummyprojectdata = [];
        if (orderbyExpression && orderbyExpression.length > 0) {
            dummyprojectdata = await dummyproject.run({
                "SELECT": {
                    "from": {
                        "ref": [
                            "CatalogService.YY1_DUMMYPROJECT"
                        ]
                    },
                    "where": aStaticFilters,
                    "orderBy": orderbyExpression
                }
            });
        } else {
            dummyprojectdata = await dummyproject.run({
                "SELECT": {
                    "from": {
                        "ref": [
                            "CatalogService.YY1_DUMMYPROJECT"
                        ]
                    },
                    "where": aStaticFilters
                }
            });
        }

        const projecttimedata = await projecttime.run(
            SELECT
                .from("YY1_DUMMYPROJECTTIME3")
                .columns(
                    "SAP_UUID",
                    "PersonWorkAgreement",
                    "TimeSheetDate",
                    "WBSelement",
                    "ParentUUID"
                ).orderBy(
                    "TimeSheetDate"
                )
        )

        let result = dummyprojectdata.map((dummyproject) => {
            const data = {
                ID: dummyproject.SAP_UUID,
                CUSTOMER: dummyproject.Customer,
                CUSTOMER_NAME: dummyproject.CustomerName,
                PROJECT_NAME: dummyproject.ProjectName,
                PROJECT_DESC: dummyproject.ProjectDescription,
                PERSON_NUMBER: dummyproject.PersonnelNumber,
                PERSON_NAME: dummyproject.PersonFullName,
                STAND_BY: dummyproject.StandByAllowed,
                STATUS: dummyproject.DummyProjectStatus,
                WBS_ELEMENT: ""
            }
            var oEmployeeFirstRecord = projecttimedata.find((timedata) => {
                return (dummyproject.SAP_UUID === timedata.ParentUUID)
            });
            data.FIRST_DAY = oEmployeeFirstRecord?.TimeSheetDate;
            data.TIME_UUID = oEmployeeFirstRecord?.SAP_UUID;
            return data;
        });

        // Keep only records that has a valid dummy time 
        result = result.filter((data) => data.FIRST_DAY ? true : false);
        let count = parseInt(req._queryOptions.$top);
        let skip = parseInt(req._queryOptions.$skip);
        result = result.slice(skip, skip + count);
        result.$count = 100;
        return result;
    });

    /**
    * Handler for the Value help entities, based on the Dummy Project Business Object. 
    * This implementation handles the entity sets: Customer, Employees and Projects
    */
    srv.on("READ", ["Customers", "Employees", "Projects"], async (req, res) => {
        const dummyproject = await cds.connect.to("YY1_DUMMYPROJECT_CDS");
        const projecttime = await cds.connect.to("YY1_DUMMYPROJECTTIME3_CDS");
        let entity = req.query.SELECT.from.ref[0].split(".").reverse().at(0);
        let fitlers = req.query.SELECT?.where;
        let aStaticFilters = [
            {
                "ref": [
                    "DummyProjectStatus"
                ]
            },
            "!=",
            {
                "val": "Closed"
            }
        ];
        if (fitlers) {
            aStaticFilters = [...aStaticFilters, 'and', ...fitlers]
        }
        let dummyprojectdata = await dummyproject.run({
            "SELECT": {
                "from": {
                    "ref": [
                        "ProjectCodes.YY1_DUMMYPROJECT"
                    ]
                },
                "where": aStaticFilters
            }
        });

        let projecttimedata = await projecttime.run(
            SELECT
                .from("YY1_DUMMYPROJECTTIME3")
                .columns(
                    "SAP_UUID",
                    "PersonWorkAgreement",
                    "TimeSheetDate",
                    "WBSelement"
                ).orderBy(
                    "TimeSheetDate"
                )
        );
        dummyprojectdata = dummyprojectdata.map((dummyproject) => {
            const data = dummyproject
            var oEmployeeFirstRecord = projecttimedata.find((timedata) => {
                return (dummyproject.SAP_UUID === timedata.ParentUUID)
            });
            data.FIRST_DAY = oEmployeeFirstRecord?.TimeSheetDate;
            data.TIME_UUID = oEmployeeFirstRecord?.SAP_UUID;
            return data;
        });
        // dummyprojectdata = dummyprojectdata.filter((data) => data.FIRST_DAY ? true : false);
        let result = dummyprojectdata.map((dummyproject) => {
            let data = {};
            switch (entity) {
                case "Customers":
                    data = {
                        Customer: dummyproject.Customer,
                        CustomerName: dummyproject.CustomerName,
                    }
                    break;
                case "Employees":
                    data = {
                        PersonnelNumber: dummyproject.PersonnelNumber,
                        PersonFullName: dummyproject.PersonFullName,
                    }
                    break;
                case "Projects":
                    data = {
                        ProjectName: dummyproject.ProjectName,
                        ProjectDescription: dummyproject.ProjectDescription,
                    }
                    break;
            }
            return data;
        });

        // remove duplicates
        if (req.entity === "ProjectCodes.Customers") {
            result = Array.from(new Set(result.map(obj => obj.Customer))).map(Customer => {
                return result.find(obj => obj.Customer === Customer);
            });
        }
        else if (req.entity === "ProjectCodes.Employees") {
            result = Array.from(new Set(result.map(obj => obj.PersonnelNumber))).map(PersonnelNumber => {
                return result.find(obj => obj.PersonnelNumber === PersonnelNumber);
            });
        }
        else {
            result = Array.from(new Set(result.map(obj => obj.ProjectName))).map(ProjectName => {
                return result.find(obj => obj.ProjectName === ProjectName);
            });
        }
        result.$count = 10;
        return result;
    });

    srv.on("CopyAssignment", async (req) => {
        req.error(400);
    });

    srv.on("READ", "YY1_PROJECTSTAFFING_2", (req) => {
        req.query.SELECT.orderBy = [{ ref: ['WBSElementInternalID'], sort: 'asc' }];
        return staffing.tx(req).run(req.query);
    });

    /**
     * Get Dummy Project
     */
    srv.on("READ", "YY1_DUMMYPROJECT", (req) => {
        return dummyproject.tx(req).run(req.query);
    });

    /**
     * Get Dummy project time
     */
    srv.on("READ", "YY1_DUMMYPROJECTTIME3", (req) => {
        const projecttimedata = projecttime.tx(req).run(req.query);
        return projecttimedata;
    });
};