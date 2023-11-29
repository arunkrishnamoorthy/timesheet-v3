/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  transformReturnValueForEntity,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { yy1Dummyprojecttime3Cds } from './service';
import { Yy1_Dummyprojecttime3 } from './Yy1_Dummyprojecttime3';
import { Yy1_Dummyprojecttime3Api } from './Yy1_Dummyprojecttime3Api';

/**
 * Type of the parameters to be passed to {@link yy1Dummyprojecttime3SapUpsert}.
 */
export interface Yy1Dummyprojecttime3SapUpsertParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sap Description.
   */
  sapDescription?: string | null;
  /**
   * Controlling Area.
   */
  controllingArea?: string | null;
  /**
   * Sender Cost Center.
   */
  senderCostCenter?: string | null;
  /**
   * Receiver Cost Center.
   */
  receiverCostCenter?: string | null;
  /**
   * Internal Order.
   */
  internalOrder?: string | null;
  /**
   * Activity Type.
   */
  activityType?: string | null;
  /**
   * Wb Selement.
   */
  wbSelement?: string | null;
  /**
   * Work Item.
   */
  workItem?: string | null;
  /**
   * Billing Control Category.
   */
  billingControlCategory?: string | null;
  /**
   * Purchase Order.
   */
  purchaseOrder?: string | null;
  /**
   * Purchase Order Item.
   */
  purchaseOrderItem?: string | null;
  /**
   * Timesheet Task Type.
   */
  timesheetTaskType?: string | null;
  /**
   * Time Sheet Task Level.
   */
  timeSheetTaskLevel?: string | null;
  /**
   * Time Sheet Task Component.
   */
  timeSheetTaskComponent?: string | null;
  /**
   * Time Sheet Note.
   */
  timeSheetNote?: string | null;
  /**
   * Recorded Hours.
   */
  recordedHours?: BigNumber | null;
  /**
   * Recorded Quantity.
   */
  recordedQuantity?: BigNumber | null;
  /**
   * Hours Unit Of Measure.
   */
  hoursUnitOfMeasure?: string | null;
  /**
   * Rejection Reason.
   */
  rejectionReason?: string | null;
  /**
   * Time Sheet Wrk Loc Code.
   */
  timeSheetWrkLocCode?: string | null;
  /**
   * Time Sheet Overtime Category.
   */
  timeSheetOvertimeCategory?: string | null;
  /**
   * Sender Pub Sec Fund.
   */
  senderPubSecFund?: string | null;
  /**
   * Sending Pub Sec Functional Area.
   */
  sendingPubSecFunctionalArea?: string | null;
  /**
   * Sender Pub Sec Grant.
   */
  senderPubSecGrant?: string | null;
  /**
   * Sender Pub Sec Budget Period.
   */
  senderPubSecBudgetPeriod?: string | null;
  /**
   * Receiver Pub Sec Fund.
   */
  receiverPubSecFund?: string | null;
  /**
   * Receiver Pub Sec Funcnl Area.
   */
  receiverPubSecFuncnlArea?: string | null;
  /**
   * Receiver Pub Sec Grant.
   */
  receiverPubSecGrant?: string | null;
  /**
   * Receiver Pub Sec Budget Period.
   */
  receiverPubSecBudgetPeriod?: string | null;
  /**
   * Person Work Agreement External I.
   */
  personWorkAgreementExternalI?: string | null;
  /**
   * Company Code.
   */
  companyCode?: string | null;
  /**
   * Time Sheet Record.
   */
  timeSheetRecord?: string | null;
  /**
   * Person Work Agreement.
   */
  personWorkAgreement?: string | null;
  /**
   * Time Sheet Date.
   */
  timeSheetDate?: Moment | null;
  /**
   * Time Sheet Is Released On Save.
   */
  timeSheetIsReleasedOnSave?: boolean | null;
  /**
   * Time Sheet Predecessor Record.
   */
  timeSheetPredecessorRecord?: string | null;
  /**
   * Time Sheet Status.
   */
  timeSheetStatus?: string | null;
  /**
   * Time Sheet Is Executed In Test Run.
   */
  timeSheetIsExecutedInTestRun?: boolean | null;
  /**
   * Time Sheet Operation.
   */
  timeSheetOperation?: string | null;
  /**
   * Parent Uuid.
   */
  parentUuid?: string | null;
}

/**
 * Yy 1 Dummyprojecttime 3 Sap Upsert.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function yy1Dummyprojecttime3SapUpsert<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: Yy1Dummyprojecttime3SapUpsertParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  Yy1Dummyprojecttime3SapUpsertParameters<DeSerializersT>,
  Yy1_Dummyprojecttime3
> {
  const params = {
    sapDescription: new OperationParameter(
      'SAP_Description',
      'Edm.String',
      parameters.sapDescription
    ),
    controllingArea: new OperationParameter(
      'ControllingArea',
      'Edm.String',
      parameters.controllingArea
    ),
    senderCostCenter: new OperationParameter(
      'SenderCostCenter',
      'Edm.String',
      parameters.senderCostCenter
    ),
    receiverCostCenter: new OperationParameter(
      'ReceiverCostCenter',
      'Edm.String',
      parameters.receiverCostCenter
    ),
    internalOrder: new OperationParameter(
      'InternalOrder',
      'Edm.String',
      parameters.internalOrder
    ),
    activityType: new OperationParameter(
      'ActivityType',
      'Edm.String',
      parameters.activityType
    ),
    wbSelement: new OperationParameter(
      'WBSelement',
      'Edm.String',
      parameters.wbSelement
    ),
    workItem: new OperationParameter(
      'WorkItem',
      'Edm.String',
      parameters.workItem
    ),
    billingControlCategory: new OperationParameter(
      'BillingControlCategory',
      'Edm.String',
      parameters.billingControlCategory
    ),
    purchaseOrder: new OperationParameter(
      'PurchaseOrder',
      'Edm.String',
      parameters.purchaseOrder
    ),
    purchaseOrderItem: new OperationParameter(
      'PurchaseOrderItem',
      'Edm.String',
      parameters.purchaseOrderItem
    ),
    timesheetTaskType: new OperationParameter(
      'TimesheetTaskType',
      'Edm.String',
      parameters.timesheetTaskType
    ),
    timeSheetTaskLevel: new OperationParameter(
      'TimeSheetTaskLevel',
      'Edm.String',
      parameters.timeSheetTaskLevel
    ),
    timeSheetTaskComponent: new OperationParameter(
      'TimeSheetTaskComponent',
      'Edm.String',
      parameters.timeSheetTaskComponent
    ),
    timeSheetNote: new OperationParameter(
      'TimeSheetNote',
      'Edm.String',
      parameters.timeSheetNote
    ),
    recordedHours: new OperationParameter(
      'RecordedHours',
      'Edm.Decimal',
      parameters.recordedHours
    ),
    recordedQuantity: new OperationParameter(
      'RecordedQuantity',
      'Edm.Decimal',
      parameters.recordedQuantity
    ),
    hoursUnitOfMeasure: new OperationParameter(
      'HoursUnitOfMeasure',
      'Edm.String',
      parameters.hoursUnitOfMeasure
    ),
    rejectionReason: new OperationParameter(
      'RejectionReason',
      'Edm.String',
      parameters.rejectionReason
    ),
    timeSheetWrkLocCode: new OperationParameter(
      'TimeSheetWrkLocCode',
      'Edm.String',
      parameters.timeSheetWrkLocCode
    ),
    timeSheetOvertimeCategory: new OperationParameter(
      'TimeSheetOvertimeCategory',
      'Edm.String',
      parameters.timeSheetOvertimeCategory
    ),
    senderPubSecFund: new OperationParameter(
      'SenderPubSecFund',
      'Edm.String',
      parameters.senderPubSecFund
    ),
    sendingPubSecFunctionalArea: new OperationParameter(
      'SendingPubSecFunctionalArea',
      'Edm.String',
      parameters.sendingPubSecFunctionalArea
    ),
    senderPubSecGrant: new OperationParameter(
      'SenderPubSecGrant',
      'Edm.String',
      parameters.senderPubSecGrant
    ),
    senderPubSecBudgetPeriod: new OperationParameter(
      'SenderPubSecBudgetPeriod',
      'Edm.String',
      parameters.senderPubSecBudgetPeriod
    ),
    receiverPubSecFund: new OperationParameter(
      'ReceiverPubSecFund',
      'Edm.String',
      parameters.receiverPubSecFund
    ),
    receiverPubSecFuncnlArea: new OperationParameter(
      'ReceiverPubSecFuncnlArea',
      'Edm.String',
      parameters.receiverPubSecFuncnlArea
    ),
    receiverPubSecGrant: new OperationParameter(
      'ReceiverPubSecGrant',
      'Edm.String',
      parameters.receiverPubSecGrant
    ),
    receiverPubSecBudgetPeriod: new OperationParameter(
      'ReceiverPubSecBudgetPeriod',
      'Edm.String',
      parameters.receiverPubSecBudgetPeriod
    ),
    personWorkAgreementExternalI: new OperationParameter(
      'PersonWorkAgreementExternalI',
      'Edm.String',
      parameters.personWorkAgreementExternalI
    ),
    companyCode: new OperationParameter(
      'CompanyCode',
      'Edm.String',
      parameters.companyCode
    ),
    timeSheetRecord: new OperationParameter(
      'TimeSheetRecord',
      'Edm.String',
      parameters.timeSheetRecord
    ),
    personWorkAgreement: new OperationParameter(
      'PersonWorkAgreement',
      'Edm.String',
      parameters.personWorkAgreement
    ),
    timeSheetDate: new OperationParameter(
      'TimeSheetDate',
      'Edm.DateTime',
      parameters.timeSheetDate
    ),
    timeSheetIsReleasedOnSave: new OperationParameter(
      'TimeSheetIsReleasedOnSave',
      'Edm.Boolean',
      parameters.timeSheetIsReleasedOnSave
    ),
    timeSheetPredecessorRecord: new OperationParameter(
      'TimeSheetPredecessorRecord',
      'Edm.String',
      parameters.timeSheetPredecessorRecord
    ),
    timeSheetStatus: new OperationParameter(
      'TimeSheetStatus',
      'Edm.String',
      parameters.timeSheetStatus
    ),
    timeSheetIsExecutedInTestRun: new OperationParameter(
      'TimeSheetIsExecutedInTestRun',
      'Edm.Boolean',
      parameters.timeSheetIsExecutedInTestRun
    ),
    timeSheetOperation: new OperationParameter(
      'TimeSheetOperation',
      'Edm.String',
      parameters.timeSheetOperation
    ),
    parentUuid: new OperationParameter(
      'ParentUUID',
      'Edm.String',
      parameters.parentUuid
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/YY1_DUMMYPROJECTTIME3_CDS',
    'YY1_DUMMYPROJECTTIME3Sap_upsert',
    data =>
      transformReturnValueForEntity(
        data,
        yy1Dummyprojecttime3Cds(deSerializers).yy1_Dummyprojecttime3Api
      ),
    params,
    deSerializers
  );
}

export const operations = {
  yy1Dummyprojecttime3SapUpsert
};
