sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ordinats.ui.managestandinui',
            componentId: 'YY1_DUMMYPROJECTObjectPage',
            contextPath: '/YY1_DUMMYPROJECT'
        },
        CustomPageDefinitions
    );
});