"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = exports.yy1DummyprojectSapUpsert = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const service_1 = require("./service");
/**
 * Yy 1 Dummyproject Sap Upsert.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function yy1DummyprojectSapUpsert(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        personnelNumber: new odata_v2_1.OperationParameter('PersonnelNumber', 'Edm.String', parameters.personnelNumber),
        customer: new odata_v2_1.OperationParameter('Customer', 'Edm.String', parameters.customer),
        projectName: new odata_v2_1.OperationParameter('ProjectName', 'Edm.String', parameters.projectName),
        personFullName: new odata_v2_1.OperationParameter('PersonFullName', 'Edm.String', parameters.personFullName),
        customerName: new odata_v2_1.OperationParameter('CustomerName', 'Edm.String', parameters.customerName),
        projectDescription: new odata_v2_1.OperationParameter('ProjectDescription', 'Edm.String', parameters.projectDescription),
        standByAllowed: new odata_v2_1.OperationParameter('StandByAllowed', 'Edm.Boolean', parameters.standByAllowed),
        dummyProjectStatus: new odata_v2_1.OperationParameter('DummyProjectStatus', 'Edm.String', parameters.dummyProjectStatus)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/YY1_DUMMYPROJECT_CDS', 'YY1_DUMMYPROJECTSap_upsert', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.yy1DummyprojectCds)(deSerializers).yy1_DummyprojectApi), params, deSerializers);
}
exports.yy1DummyprojectSapUpsert = yy1DummyprojectSapUpsert;
exports.operations = {
    yy1DummyprojectSapUpsert
};
//# sourceMappingURL=operations.js.map