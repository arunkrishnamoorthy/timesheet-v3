sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ordinats/ui/superlockbelgium/test/integration/FirstJourney',
		'com/ordinats/ui/superlockbelgium/test/integration/pages/EmployeeDataList',
		'com/ordinats/ui/superlockbelgium/test/integration/pages/EmployeeDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeDataList, EmployeeDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ordinats/ui/superlockbelgium') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeDataList: EmployeeDataList,
					onTheEmployeeDataObjectPage: EmployeeDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);