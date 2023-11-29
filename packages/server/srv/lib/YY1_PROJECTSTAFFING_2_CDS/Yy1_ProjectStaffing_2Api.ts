/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_ProjectStaffing_2 } from './Yy1_ProjectStaffing_2';
import { Yy1_ProjectStaffing_2RequestBuilder } from './Yy1_ProjectStaffing_2RequestBuilder';
import { Yy1_Overtimecategory_VApi } from './Yy1_Overtimecategory_VApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class Yy1_ProjectStaffing_2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_ProjectStaffing_2<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): Yy1_ProjectStaffing_2Api<DeSerializersT> {
    return new Yy1_ProjectStaffing_2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toYy1OvertimeCategoryCpd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_YY_1_OVERTIME_CATEGORY_CPD: OneToOneLink<
      Yy1_ProjectStaffing_2<DeSerializersT>,
      DeSerializersT,
      Yy1_Overtimecategory_VApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [Yy1_Overtimecategory_VApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_YY_1_OVERTIME_CATEGORY_CPD: new OneToOneLink(
        'to_YY1_OvertimeCategory_cpd',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = Yy1_ProjectStaffing_2;

  requestBuilder(): Yy1_ProjectStaffing_2RequestBuilder<DeSerializersT> {
    return new Yy1_ProjectStaffing_2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_ProjectStaffing_2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_ProjectStaffing_2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_ProjectStaffing_2<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Yy1_ProjectStaffing_2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_ProjectStaffing_2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_LINE_ITEM_UUID: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PERIOD: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_ELEMENT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PACKAGE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_RESOURCE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_INTERNAL_ID: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_CONTROL_CATEGORY: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ORGANIZATION: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLND_EFFORT_QTY: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLND_REVN_AMT: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WORK_PACKAGE_NAME: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PACKAGE_START_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    WORK_PACKAGE_END_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_RESOURCE_TYPE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ITEM_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_REQUEST_STATUS: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YY_1_OVERTIME_CATEGORY_CPD: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YY_1_ASTRIDID_2_CPD: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_NAME: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ENGAGEMENT_PROJECT_STAGE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORMANCE_PERIOD_START_DATE_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PERFORMANCE_PERIOD_END_DATE_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PURCHASE_ORDER_SCHEDULE_LINE_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORMANCE_PERIOD_START_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PERFORMANCE_PERIOD_END_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PURCHASE_ORDER_SCHEDULE_LINE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_CONTROLLING_AREA: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_VALIDITY_END_DATE: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PURCHASE_ORDER_CALCULATED: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ITEM_CALCULATED: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_START_DATE_CALCULATED: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PO_END_DATE_CALCULATED: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PARTNER: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME_1: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_CUSTOMER_NAME: OrderableEdmTypeField<
      Yy1_ProjectStaffing_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toYy1OvertimeCategoryCpd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_YY_1_OVERTIME_CATEGORY_CPD: OneToOneLink<
      Yy1_ProjectStaffing_2<DeSerializersT>,
      DeSerializersT,
      Yy1_Overtimecategory_VApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Yy1_ProjectStaffing_2<DeSerializers>>;
  };

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
        PLAN_LINE_ITEM_UUID: fieldBuilder.buildEdmTypeField(
          'PlanLineItemUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'EngagementProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsElementInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'WBSElementInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workPackage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE: fieldBuilder.buildEdmTypeField(
          'WorkPackage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_RESOURCE: fieldBuilder.buildEdmTypeField(
          'EngagementProjectResource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link person} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true),
        /**
         * Static representation of the {@link employmentInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingControlCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CONTROL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillingControlCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'DeliveryOrganization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plndEffortQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLND_EFFORT_QTY: fieldBuilder.buildEdmTypeField(
          'PlndEffortQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link plndRevnAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLND_REVN_AMT: fieldBuilder.buildEdmTypeField(
          'PlndRevnAmt',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link workPackageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE_NAME: fieldBuilder.buildEdmTypeField(
          'WorkPackageName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workPackageStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkPackageStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link workPackageEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PACKAGE_END_DATE: fieldBuilder.buildEdmTypeField(
          'WorkPackageEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link costCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER: fieldBuilder.buildEdmTypeField(
          'CostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectResourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_RESOURCE_TYPE: fieldBuilder.buildEdmTypeField(
          'EngagementProjectResourceType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_1: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderItem1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM_1: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItem_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceRequestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_REQUEST_STATUS: fieldBuilder.buildEdmTypeField(
          'ResourceRequestStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yy1OvertimeCategoryCpd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YY_1_OVERTIME_CATEGORY_CPD: fieldBuilder.buildEdmTypeField(
          'YY1_OvertimeCategory_cpd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yy1Astridid2Cpd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YY_1_ASTRIDID_2_CPD: fieldBuilder.buildEdmTypeField(
          'YY1_ASTRIDID2_cpd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenter1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_1: fieldBuilder.buildEdmTypeField(
          'CostCenter_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'EngagementProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link engagementProjectStage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGAGEMENT_PROJECT_STAGE: fieldBuilder.buildEdmTypeField(
          'EngagementProjectStage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link performancePeriodStartDate1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_START_DATE_1: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodStartDate_1',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link performancePeriodEndDate1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_END_DATE_1: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodEndDate_1',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderScheduleLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_SCHEDULE_LINE_1: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderScheduleLine_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link performancePeriodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link performancePeriodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE_PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PerformancePeriodEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderScheduleLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_SCHEDULE_LINE: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderScheduleLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenterControllingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_CONTROLLING_AREA: fieldBuilder.buildEdmTypeField(
          'CostCenterControllingArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenterValidityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'CostCenterValidityEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_CALCULATED: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderCalculated',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderItemCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM_CALCULATED: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItemCalculated',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link poStartDateCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_START_DATE_CALCULATED: fieldBuilder.buildEdmTypeField(
          'POStartDateCalculated',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link poEndDateCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_END_DATE_CALCULATED: fieldBuilder.buildEdmTypeField(
          'POEndDateCalculated',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link partner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER: fieldBuilder.buildEdmTypeField('Partner', 'Edm.String', true),
        /**
         * Static representation of the {@link customerName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME_1: fieldBuilder.buildEdmTypeField(
          'CustomerName_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayCustomerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'DisplayCustomerName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_ProjectStaffing_2)
      };
    }

    return this._schema;
  }
}
