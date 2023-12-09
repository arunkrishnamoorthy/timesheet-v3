sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ordinats.ui.managesuperlock',
            componentId: 'EmployeeDataList',
            contextPath: '/EmployeeData'
        },
        CustomPageDefinitions
    );
});