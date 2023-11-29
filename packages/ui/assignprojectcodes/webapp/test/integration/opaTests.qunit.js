sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ordinats/ui/assignprojectcodes/test/integration/FirstJourney',
		'com/ordinats/ui/assignprojectcodes/test/integration/pages/ProjectCodesList',
		'com/ordinats/ui/assignprojectcodes/test/integration/pages/ProjectCodesObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectCodesList, ProjectCodesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ordinats/ui/assignprojectcodes') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectCodesList: ProjectCodesList,
					onTheProjectCodesObjectPage: ProjectCodesObjectPage
                }
            },
            opaJourney.run
        );
    }
);