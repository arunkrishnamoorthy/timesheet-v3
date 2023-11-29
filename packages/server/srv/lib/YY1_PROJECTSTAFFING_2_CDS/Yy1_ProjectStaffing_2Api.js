"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_ProjectStaffing_2Api = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_ProjectStaffing_2_1 = require("./Yy1_ProjectStaffing_2");
const Yy1_ProjectStaffing_2RequestBuilder_1 = require("./Yy1_ProjectStaffing_2RequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Yy1_ProjectStaffing_2Api {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Yy1_ProjectStaffing_2_1.Yy1_ProjectStaffing_2;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new Yy1_ProjectStaffing_2Api(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_YY_1_OVERTIME_CATEGORY_CPD: new odata_v2_1.OneToOneLink('to_YY1_OvertimeCategory_cpd', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new Yy1_ProjectStaffing_2RequestBuilder_1.Yy1_ProjectStaffing_2RequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Yy1_ProjectStaffing_2_1.Yy1_ProjectStaffing_2, this.deSerializers);
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
                 * Static representation of the {@link planLineItemUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLAN_LINE_ITEM_UUID: fieldBuilder.buildEdmTypeField('PlanLineItemUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link fiscalYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FISCAL_YEAR: fieldBuilder.buildEdmTypeField('FiscalYear', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProject} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT: fieldBuilder.buildEdmTypeField('EngagementProject', 'Edm.String', true),
                /**
                 * Static representation of the {@link fiscalPeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FISCAL_PERIOD: fieldBuilder.buildEdmTypeField('FiscalPeriod', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElementInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link workPackage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE: fieldBuilder.buildEdmTypeField('WorkPackage', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjectResource} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_RESOURCE: fieldBuilder.buildEdmTypeField('EngagementProjectResource', 'Edm.String', true),
                /**
                 * Static representation of the {@link person} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true),
                /**
                 * Static representation of the {@link employmentInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('EmploymentInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingControlCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_CONTROL_CATEGORY: fieldBuilder.buildEdmTypeField('BillingControlCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_ORGANIZATION: fieldBuilder.buildEdmTypeField('DeliveryOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link plndEffortQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_EFFORT_QTY: fieldBuilder.buildEdmTypeField('PlndEffortQty', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link plndRevnAmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_REVN_AMT: fieldBuilder.buildEdmTypeField('PlndRevnAmt', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link workPackageName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE_NAME: fieldBuilder.buildEdmTypeField('WorkPackageName', 'Edm.String', true),
                /**
                 * Static representation of the {@link workPackageStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE_START_DATE: fieldBuilder.buildEdmTypeField('WorkPackageStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link workPackageEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_PACKAGE_END_DATE: fieldBuilder.buildEdmTypeField('WorkPackageEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link costCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER: fieldBuilder.buildEdmTypeField('CostCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitOfMeasure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField('UnitOfMeasure', 'Edm.String', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjectResourceType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_RESOURCE_TYPE: fieldBuilder.buildEdmTypeField('EngagementProjectResourceType', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER: fieldBuilder.buildEdmTypeField('PurchaseOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField('PurchaseOrderItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrder1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_1: fieldBuilder.buildEdmTypeField('PurchaseOrder_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderItem1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_ITEM_1: fieldBuilder.buildEdmTypeField('PurchaseOrderItem_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link resourceRequestStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESOURCE_REQUEST_STATUS: fieldBuilder.buildEdmTypeField('ResourceRequestStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link yy1OvertimeCategoryCpd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                YY_1_OVERTIME_CATEGORY_CPD: fieldBuilder.buildEdmTypeField('YY1_OvertimeCategory_cpd', 'Edm.String', true),
                /**
                 * Static representation of the {@link yy1Astridid2Cpd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                YY_1_ASTRIDID_2_CPD: fieldBuilder.buildEdmTypeField('YY1_ASTRIDID2_cpd', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('CustomerName', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenter1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER_1: fieldBuilder.buildEdmTypeField('CostCenter_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link engagementProjectName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_NAME: fieldBuilder.buildEdmTypeField('EngagementProjectName', 'Edm.String', true),
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
                 * Static representation of the {@link engagementProjectStage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENGAGEMENT_PROJECT_STAGE: fieldBuilder.buildEdmTypeField('EngagementProjectStage', 'Edm.String', true),
                /**
                 * Static representation of the {@link performancePeriodStartDate1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERFORMANCE_PERIOD_START_DATE_1: fieldBuilder.buildEdmTypeField('PerformancePeriodStartDate_1', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link performancePeriodEndDate1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERFORMANCE_PERIOD_END_DATE_1: fieldBuilder.buildEdmTypeField('PerformancePeriodEndDate_1', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link purchaseOrderScheduleLine1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_SCHEDULE_LINE_1: fieldBuilder.buildEdmTypeField('PurchaseOrderScheduleLine_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link performancePeriodStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERFORMANCE_PERIOD_START_DATE: fieldBuilder.buildEdmTypeField('PerformancePeriodStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link performancePeriodEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERFORMANCE_PERIOD_END_DATE: fieldBuilder.buildEdmTypeField('PerformancePeriodEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link purchaseOrderScheduleLine} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_SCHEDULE_LINE: fieldBuilder.buildEdmTypeField('PurchaseOrderScheduleLine', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenterControllingArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER_CONTROLLING_AREA: fieldBuilder.buildEdmTypeField('CostCenterControllingArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link costCenterValidityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_CENTER_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('CostCenterValidityEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link purchaseOrderCalculated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_CALCULATED: fieldBuilder.buildEdmTypeField('PurchaseOrderCalculated', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderItemCalculated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_ITEM_CALCULATED: fieldBuilder.buildEdmTypeField('PurchaseOrderItemCalculated', 'Edm.String', true),
                /**
                 * Static representation of the {@link poStartDateCalculated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_START_DATE_CALCULATED: fieldBuilder.buildEdmTypeField('POStartDateCalculated', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link poEndDateCalculated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PO_END_DATE_CALCULATED: fieldBuilder.buildEdmTypeField('POEndDateCalculated', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link partner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER: fieldBuilder.buildEdmTypeField('Partner', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_NAME_1: fieldBuilder.buildEdmTypeField('CustomerName_1', 'Edm.String', true),
                /**
                 * Static representation of the {@link displayCustomerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISPLAY_CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('DisplayCustomerName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Yy1_ProjectStaffing_2_1.Yy1_ProjectStaffing_2)
            };
        }
        return this._schema;
    }
}
exports.Yy1_ProjectStaffing_2Api = Yy1_ProjectStaffing_2Api;
//# sourceMappingURL=Yy1_ProjectStaffing_2Api.js.map