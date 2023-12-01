"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_Wa_AvailabilityApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Wa_Availability_1 = require("./Yy1_Wa_Availability");
const Yy1_Wa_AvailabilityRequestBuilder_1 = require("./Yy1_Wa_AvailabilityRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_Wa_AvailabilityApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_Wa_Availability_1.Yy1_Wa_Availability;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_Wa_AvailabilityApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new Yy1_Wa_AvailabilityRequestBuilder_1.Yy1_Wa_AvailabilityRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_Wa_Availability_1.Yy1_Wa_Availability, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
                /**
                 * Static representation of the {@link person} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true),
                /**
                 * Static representation of the {@link personFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personWorkAgreement1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_WORK_AGREEMENT_1: fieldBuilder.buildEdmTypeField('PersonWorkAgreement_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link startDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                START_DATE: fieldBuilder.buildEdmTypeField('StartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link endDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_DATE: fieldBuilder.buildEdmTypeField('EndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER: fieldBuilder.buildEdmTypeField('CostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCodeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField('CompanyCodeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerRole} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_ROLE: fieldBuilder.buildEdmTypeField('BusinessPartnerRole', 'Edm.String', true),
                /**
                 * Static representation of the {@link personExternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_EXTERNAL_ID: fieldBuilder.buildEdmTypeField('PersonExternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', true),
                /**
                 * Static representation of the {@link personWorkAgreement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField('PersonWorkAgreement', 'Edm.String', true),
                /**
                 * Static representation of the {@link calendarDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALENDAR_DATE: fieldBuilder.buildEdmTypeField('CalendarDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link availabilityInHours} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVAILABILITY_IN_HOURS: fieldBuilder.buildEdmTypeField('AvailabilityInHours', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link yearMonth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                YEAR_MONTH: fieldBuilder.buildEdmTypeField('YearMonth', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenterName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER_NAME: fieldBuilder.buildEdmTypeField('CostCenterName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerRoleShortName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_ROLE_SHORT_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerRoleShortName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_Wa_Availability_1.Yy1_Wa_Availability)
            };
        }
        return this._schema;
    }
}
exports.Yy1_Wa_AvailabilityApi = Yy1_Wa_AvailabilityApi;
//# sourceMappingURL=Yy1_Wa_AvailabilityApi.js.map