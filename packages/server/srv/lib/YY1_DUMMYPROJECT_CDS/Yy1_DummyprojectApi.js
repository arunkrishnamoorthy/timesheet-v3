"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_DummyprojectApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Dummyproject_1 = require("./Yy1_Dummyproject");
const Yy1_DummyprojectRequestBuilder_1 = require("./Yy1_DummyprojectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_DummyprojectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Dummyproject_1.Yy1_Dummyproject;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_DummyprojectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SAP_SYS_ADMIN_DATA_CHANGE_USER: new odata_v2_1.OneToOneLink('to_SAPSysAdminDataChangeUser', this, linkedApis[0]),
            TO_SAP_SYS_ADMIN_DATA_CREATE_USER: new odata_v2_1.OneToOneLink('to_SAPSysAdminDataCreateUser', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new Yy1_DummyprojectRequestBuilder_1.Yy1_DummyprojectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Dummyproject_1.Yy1_Dummyproject, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link sapUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_UUID: fieldBuilder.buildEdmTypeField('SAP_UUID', 'Edm.Guid', false),
                /**
                 * Static representation of the {@link personnelNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField('PersonnelNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_NAME: fieldBuilder.buildEdmTypeField('ProjectName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('CustomerName', 'Edm.String', true),
                /**
                 * Static representation of the {@link projectDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_DESCRIPTION: fieldBuilder.buildEdmTypeField('ProjectDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link standByAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STAND_BY_ALLOWED: fieldBuilder.buildEdmTypeField('StandByAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link dummyProjectStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DUMMY_PROJECT_STATUS: fieldBuilder.buildEdmTypeField('DummyProjectStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link sapCreatedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('SAP_CreatedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link sapCreatedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_CREATED_BY_USER: fieldBuilder.buildEdmTypeField('SAP_CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link sapCreatedByUserText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_CREATED_BY_USER_TEXT: fieldBuilder.buildEdmTypeField('SAP_CreatedByUser_Text', 'Edm.String', true),
                /**
                 * Static representation of the {@link sapLastChangedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_LAST_CHANGED_DATE_TIME: fieldBuilder.buildEdmTypeField('SAP_LastChangedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link sapLastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('SAP_LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link sapLastChangedByUserText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_LAST_CHANGED_BY_USER_TEXT: fieldBuilder.buildEdmTypeField('SAP_LastChangedByUser_Text', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Dummyproject_1.Yy1_Dummyproject)
            };
        }
        return this._schema;
    }
}
exports.Yy1_DummyprojectApi = Yy1_DummyprojectApi;
//# sourceMappingURL=Yy1_DummyprojectApi.js.map