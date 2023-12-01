sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheYY1_DUMMYPROJECTList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheYY1_DUMMYPROJECTList.onFilterBar().iExecuteSearch();
                
                Then.onTheYY1_DUMMYPROJECTList.onTable().iCheckRows();

                When.onTheYY1_DUMMYPROJECTList.onTable().iPressRow(0);
                Then.onTheYY1_DUMMYPROJECTObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});