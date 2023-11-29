/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  DeSerializers,
  DefaultDeSerializers,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_Dummyprojecttime3 } from './Yy1_Dummyprojecttime3';
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
export declare function yy1Dummyprojecttime3SapUpsert<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: Yy1Dummyprojecttime3SapUpsertParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  Yy1Dummyprojecttime3SapUpsertParameters<DeSerializersT>,
  Yy1_Dummyprojecttime3
>;
export declare const operations: {
  yy1Dummyprojecttime3SapUpsert: typeof yy1Dummyprojecttime3SapUpsert;
};
