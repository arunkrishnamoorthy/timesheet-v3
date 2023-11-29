/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Dummyprojecttime3 } from './Yy1_Dummyprojecttime3';
import { Yy1_Dummyprojecttime3RequestBuilder } from './Yy1_Dummyprojecttime3RequestBuilder';
import { P_Scbo_UserApi } from './P_Scbo_UserApi';
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
export class Yy1_Dummyprojecttime3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Dummyprojecttime3<DeSerializersT>, DeSerializersT>
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
  ): Yy1_Dummyprojecttime3Api<DeSerializersT> {
    return new Yy1_Dummyprojecttime3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toSapSysAdminDataChangeUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SAP_SYS_ADMIN_DATA_CHANGE_USER: OneToOneLink<
      Yy1_Dummyprojecttime3<DeSerializersT>,
      DeSerializersT,
      P_Scbo_UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSapSysAdminDataCreateUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SAP_SYS_ADMIN_DATA_CREATE_USER: OneToOneLink<
      Yy1_Dummyprojecttime3<DeSerializersT>,
      DeSerializersT,
      P_Scbo_UserApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [P_Scbo_UserApi<DeSerializersT>, P_Scbo_UserApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_SAP_SYS_ADMIN_DATA_CHANGE_USER: new OneToOneLink(
        'to_SAPSysAdminDataChangeUser',
        this,
        linkedApis[0]
      ),
      TO_SAP_SYS_ADMIN_DATA_CREATE_USER: new OneToOneLink(
        'to_SAPSysAdminDataCreateUser',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Yy1_Dummyprojecttime3;

  requestBuilder(): Yy1_Dummyprojecttime3RequestBuilder<DeSerializersT> {
    return new Yy1_Dummyprojecttime3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Dummyprojecttime3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Dummyprojecttime3<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_Dummyprojecttime3<DeSerializersT>,
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
    typeof Yy1_Dummyprojecttime3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Dummyprojecttime3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_UUID: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SAP_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_CREATED_DATE_TIME: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_CREATED_BY_USER: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_CREATED_BY_USER_TEXT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_LAST_CHANGED_DATE_TIME: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_LAST_CHANGED_BY_USER_TEXT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROLLING_AREA: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_COST_CENTER: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_COST_CENTER: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNAL_ORDER: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WB_SELEMENT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ITEM: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_CONTROL_CATEGORY: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIMESHEET_TASK_TYPE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_LEVEL: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_COMPONENT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_NOTE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORDED_HOURS: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    RECORDED_QUANTITY: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HOURS_UNIT_OF_MEASURE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REJECTION_REASON: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_WRK_LOC_CODE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_OVERTIME_CATEGORY: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_PUB_SEC_FUND: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDING_PUB_SEC_FUNCTIONAL_AREA: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_PUB_SEC_GRANT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SENDER_PUB_SEC_BUDGET_PERIOD: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_PUB_SEC_FUND: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_PUB_SEC_FUNCNL_AREA: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_PUB_SEC_GRANT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER_PUB_SEC_BUDGET_PERIOD: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT_EXTERNAL_I: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_RECORD: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_DATE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TIME_SHEET_IS_RELEASED_ON_SAVE: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TIME_SHEET_PREDECESSOR_RECORD: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_STATUS: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_IS_EXECUTED_IN_TEST_RUN: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TIME_SHEET_OPERATION: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_UUID: OrderableEdmTypeField<
      Yy1_Dummyprojecttime3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSapSysAdminDataChangeUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SAP_SYS_ADMIN_DATA_CHANGE_USER: OneToOneLink<
      Yy1_Dummyprojecttime3<DeSerializersT>,
      DeSerializersT,
      P_Scbo_UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSapSysAdminDataCreateUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SAP_SYS_ADMIN_DATA_CREATE_USER: OneToOneLink<
      Yy1_Dummyprojecttime3<DeSerializersT>,
      DeSerializersT,
      P_Scbo_UserApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Yy1_Dummyprojecttime3<DeSerializers>>;
  };

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
         * Static representation of the {@link sapDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SAP_Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SAP_CreatedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link sapCreatedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'SAP_CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapCreatedByUserText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_CREATED_BY_USER_TEXT: fieldBuilder.buildEdmTypeField(
          'SAP_CreatedByUser_Text',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapLastChangedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_LAST_CHANGED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SAP_LastChangedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link sapLastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'SAP_LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapLastChangedByUserText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_LAST_CHANGED_BY_USER_TEXT: fieldBuilder.buildEdmTypeField(
          'SAP_LastChangedByUser_Text',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controllingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROLLING_AREA: fieldBuilder.buildEdmTypeField(
          'ControllingArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderCostCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_COST_CENTER: fieldBuilder.buildEdmTypeField(
          'SenderCostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverCostCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_COST_CENTER: fieldBuilder.buildEdmTypeField(
          'ReceiverCostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internalOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_ORDER: fieldBuilder.buildEdmTypeField(
          'InternalOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'ActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbSelement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WB_SELEMENT: fieldBuilder.buildEdmTypeField(
          'WBSelement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM: fieldBuilder.buildEdmTypeField(
          'WorkItem',
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
         * Static representation of the {@link timesheetTaskType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESHEET_TASK_TYPE: fieldBuilder.buildEdmTypeField(
          'TimesheetTaskType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetTaskLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TASK_LEVEL: fieldBuilder.buildEdmTypeField(
          'TimeSheetTaskLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetTaskComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TASK_COMPONENT: fieldBuilder.buildEdmTypeField(
          'TimeSheetTaskComponent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_NOTE: fieldBuilder.buildEdmTypeField(
          'TimeSheetNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recordedHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORDED_HOURS: fieldBuilder.buildEdmTypeField(
          'RecordedHours',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link recordedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORDED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RecordedQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link hoursUnitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS_UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'HoursUnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rejectionReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTION_REASON: fieldBuilder.buildEdmTypeField(
          'RejectionReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetWrkLocCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_WRK_LOC_CODE: fieldBuilder.buildEdmTypeField(
          'TimeSheetWrkLocCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetOvertimeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_OVERTIME_CATEGORY: fieldBuilder.buildEdmTypeField(
          'TimeSheetOvertimeCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderPubSecFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_PUB_SEC_FUND: fieldBuilder.buildEdmTypeField(
          'SenderPubSecFund',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sendingPubSecFunctionalArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDING_PUB_SEC_FUNCTIONAL_AREA: fieldBuilder.buildEdmTypeField(
          'SendingPubSecFunctionalArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderPubSecGrant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_PUB_SEC_GRANT: fieldBuilder.buildEdmTypeField(
          'SenderPubSecGrant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link senderPubSecBudgetPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER_PUB_SEC_BUDGET_PERIOD: fieldBuilder.buildEdmTypeField(
          'SenderPubSecBudgetPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverPubSecFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_PUB_SEC_FUND: fieldBuilder.buildEdmTypeField(
          'ReceiverPubSecFund',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverPubSecFuncnlArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_PUB_SEC_FUNCNL_AREA: fieldBuilder.buildEdmTypeField(
          'ReceiverPubSecFuncnlArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverPubSecGrant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_PUB_SEC_GRANT: fieldBuilder.buildEdmTypeField(
          'ReceiverPubSecGrant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiverPubSecBudgetPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER_PUB_SEC_BUDGET_PERIOD: fieldBuilder.buildEdmTypeField(
          'ReceiverPubSecBudgetPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personWorkAgreementExternalI} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT_EXTERNAL_I: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreementExternalI',
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
         * Static representation of the {@link timeSheetRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_RECORD: fieldBuilder.buildEdmTypeField(
          'TimeSheetRecord',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personWorkAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_DATE: fieldBuilder.buildEdmTypeField(
          'TimeSheetDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link timeSheetIsReleasedOnSave} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_IS_RELEASED_ON_SAVE: fieldBuilder.buildEdmTypeField(
          'TimeSheetIsReleasedOnSave',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link timeSheetPredecessorRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_PREDECESSOR_RECORD: fieldBuilder.buildEdmTypeField(
          'TimeSheetPredecessorRecord',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_STATUS: fieldBuilder.buildEdmTypeField(
          'TimeSheetStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetIsExecutedInTestRun} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_IS_EXECUTED_IN_TEST_RUN: fieldBuilder.buildEdmTypeField(
          'TimeSheetIsExecutedInTestRun',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link timeSheetOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_OPERATION: fieldBuilder.buildEdmTypeField(
          'TimeSheetOperation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_UUID: fieldBuilder.buildEdmTypeField(
          'ParentUUID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_Dummyprojecttime3)
      };
    }

    return this._schema;
  }
}
