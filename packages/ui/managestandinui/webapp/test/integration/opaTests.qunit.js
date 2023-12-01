sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ordinats/ui/managestandinui/test/integration/FirstJourney',
		'com/ordinats/ui/managestandinui/test/integration/pages/YY1_DUMMYPROJECTList',
		'com/ordinats/ui/managestandinui/test/integration/pages/YY1_DUMMYPROJECTObjectPage'
    ],
    function(JourneyRunner, opaJourney, YY1_DUMMYPROJECTList, YY1_DUMMYPROJECTObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ordinats/ui/managestandinui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheYY1_DUMMYPROJECTList: YY1_DUMMYPROJECTList,
					onTheYY1_DUMMYPROJECTObjectPage: YY1_DUMMYPROJECTObjectPage
                }
            },
            opaJourney.run
        );
    }
);