"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_Overtimecategory_VApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Overtimecategory_V_1 = require("./Yy1_Overtimecategory_V");
const Yy1_Overtimecategory_VRequestBuilder_1 = require("./Yy1_Overtimecategory_VRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_Overtimecategory_VApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Overtimecategory_V_1.Yy1_Overtimecategory_V;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_Overtimecategory_VApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_Overtimecategory_VRequestBuilder_1.Yy1_Overtimecategory_VRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Overtimecategory_V_1.Yy1_Overtimecategory_V, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link code} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
                /**
                 * Static representation of the {@link codeText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CODE_TEXT: fieldBuilder.buildEdmTypeField('Code_Text', 'Edm.String', true),
                /**
                 * Static representation of the {@link isDisabled} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DISABLED: fieldBuilder.buildEdmTypeField('IsDisabled', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Overtimecategory_V_1.Yy1_Overtimecategory_V)
            };
        }
        return this._schema;
    }
}
exports.Yy1_Overtimecategory_VApi = Yy1_Overtimecategory_VApi;
//# sourceMappingURL=Yy1_Overtimecategory_VApi.js.map