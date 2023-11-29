"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_Scbo_UserApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const P_Scbo_User_1 = require("./P_Scbo_User");
const P_Scbo_UserRequestBuilder_1 = require("./P_Scbo_UserRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class P_Scbo_UserApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = P_Scbo_User_1.P_Scbo_User;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new P_Scbo_UserApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new P_Scbo_UserRequestBuilder_1.P_Scbo_UserRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(P_Scbo_User_1.P_Scbo_User, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', P_Scbo_User_1.P_Scbo_User)
            };
        }
        return this._schema;
    }
}
exports.P_Scbo_UserApi = P_Scbo_UserApi;
//# sourceMappingURL=P_Scbo_UserApi.js.map