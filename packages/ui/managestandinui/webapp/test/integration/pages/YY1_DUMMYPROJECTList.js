sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ordinats.ui.managestandinui',
            componentId: 'YY1_DUMMYPROJECTList',
            contextPath: '/YY1_DUMMYPROJECT'
        },
        CustomPageDefinitions
    );
});