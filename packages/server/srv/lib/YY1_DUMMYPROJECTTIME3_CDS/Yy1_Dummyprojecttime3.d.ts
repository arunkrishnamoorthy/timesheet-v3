/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { Yy1_Dummyprojecttime3Api } from './Yy1_Dummyprojecttime3Api';
import { P_Scbo_User, P_Scbo_UserType } from './P_Scbo_User';
/**
 * This class represents the entity "YY1_DUMMYPROJECTTIME3" of service "YY1_DUMMYPROJECTTIME3_CDS".
 */
export declare class Yy1_Dummyprojecttime3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_Dummyprojecttime3Type<T>
{
  /**
   * Technical entity name for Yy1_Dummyprojecttime3.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Dummyprojecttime3 entity
   */
  static _keys: string[];
  /**
   * 16 Byte UUID in 16 Bytes (Raw Format).
   */
  sapUuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * Maximum length: 80.
   * @nullable
   */
  sapDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  sapCreatedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  sapCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of the Technical User Account.
   * Maximum length: 80.
   * @nullable
   */
  sapCreatedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  sapLastChangedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By.
   * Maximum length: 12.
   * @nullable
   */
  sapLastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of the Technical User Account.
   * Maximum length: 80.
   * @nullable
   */
  sapLastChangedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ControllingArea.
   * Maximum length: 4.
   * @nullable
   */
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderCostCenter.
   * Maximum length: 10.
   * @nullable
   */
  senderCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverCostCenter.
   * Maximum length: 10.
   * @nullable
   */
  receiverCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * InternalOrder.
   * Maximum length: 12.
   * @nullable
   */
  internalOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ActivityType.
   * Maximum length: 6.
   * @nullable
   */
  activityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBSelement.
   * Maximum length: 40.
   * @nullable
   */
  wbSelement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WorkItem.
   * Maximum length: 10.
   * @nullable
   */
  workItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BillingControlCategory.
   * Maximum length: 8.
   * @nullable
   */
  billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PurchaseOrder.
   * Maximum length: 10.
   * @nullable
   */
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PurchaseOrderItem.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimesheetTaskType.
   * Maximum length: 4.
   * @nullable
   */
  timesheetTaskType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetTaskLevel.
   * Maximum length: 8.
   * @nullable
   */
  timeSheetTaskLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetTaskComponent.
   * Maximum length: 8.
   * @nullable
   */
  timeSheetTaskComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetNote.
   * Maximum length: 40.
   * @nullable
   */
  timeSheetNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * RecordedHours.
   * @nullable
   */
  recordedHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * RecordedQuantity.
   * @nullable
   */
  recordedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * HoursUnitOfMeasure.
   * Maximum length: 3.
   * @nullable
   */
  hoursUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rejection Reason.
   * Maximum length: 4.
   * @nullable
   */
  rejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetWrkLocCode.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetWrkLocCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetOvertimeCategory.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetOvertimeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderPubSecFund.
   * Maximum length: 10.
   * @nullable
   */
  senderPubSecFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SendingPubSecFunctionalArea.
   * Maximum length: 16.
   * @nullable
   */
  sendingPubSecFunctionalArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderPubSecGrant.
   * Maximum length: 20.
   * @nullable
   */
  senderPubSecGrant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderPubSecBudgetPeriod.
   * Maximum length: 10.
   * @nullable
   */
  senderPubSecBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecFund.
   * Maximum length: 10.
   * @nullable
   */
  receiverPubSecFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecFuncnlArea.
   * Maximum length: 16.
   * @nullable
   */
  receiverPubSecFuncnlArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecGrant.
   * Maximum length: 20.
   * @nullable
   */
  receiverPubSecGrant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecBudgetPeriod.
   * Maximum length: 10.
   * @nullable
   */
  receiverPubSecBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PersonWorkAgreementExternalID.
   * Maximum length: 20.
   * @nullable
   */
  personWorkAgreementExternalI?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CompanyCode.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetRecord.
   * Maximum length: 25.
   * @nullable
   */
  timeSheetRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PersonWorkAgreement.
   * Maximum length: 8.
   * @nullable
   */
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetDate.
   * @nullable
   */
  timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * TimeSheetIsReleasedOnSave.
   * @nullable
   */
  timeSheetIsReleasedOnSave?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * TimeSheetPredecessorRecord.
   * Maximum length: 12.
   * @nullable
   */
  timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetStatus.
   * Maximum length: 2.
   * @nullable
   */
  timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetIsExecutedInTestRun.
   * @nullable
   */
  timeSheetIsExecutedInTestRun?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * TimeSheetOperation.
   * Maximum length: 1.
   * @nullable
   */
  timeSheetOperation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ParentUUID.
   * Maximum length: 36.
   * @nullable
   */
  parentUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link P_Scbo_User} entity.
   */
  toSapSysAdminDataChangeUser?: P_Scbo_User<T> | null;
  /**
   * One-to-one navigation property to the {@link P_Scbo_User} entity.
   */
  toSapSysAdminDataCreateUser?: P_Scbo_User<T> | null;
  constructor(_entityApi: Yy1_Dummyprojecttime3Api<T>);
}
export interface Yy1_Dummyprojecttime3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapUuid: DeserializedType<T, 'Edm.Guid'>;
  sapDescription?: DeserializedType<T, 'Edm.String'> | null;
  sapCreatedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sapCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  sapCreatedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  sapLastChangedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sapLastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  sapLastChangedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  senderCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  receiverCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  internalOrder?: DeserializedType<T, 'Edm.String'> | null;
  activityType?: DeserializedType<T, 'Edm.String'> | null;
  wbSelement?: DeserializedType<T, 'Edm.String'> | null;
  workItem?: DeserializedType<T, 'Edm.String'> | null;
  billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  timesheetTaskType?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskLevel?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskComponent?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetNote?: DeserializedType<T, 'Edm.String'> | null;
  recordedHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  recordedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  hoursUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  rejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetWrkLocCode?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetOvertimeCategory?: DeserializedType<T, 'Edm.String'> | null;
  senderPubSecFund?: DeserializedType<T, 'Edm.String'> | null;
  sendingPubSecFunctionalArea?: DeserializedType<T, 'Edm.String'> | null;
  senderPubSecGrant?: DeserializedType<T, 'Edm.String'> | null;
  senderPubSecBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  receiverPubSecFund?: DeserializedType<T, 'Edm.String'> | null;
  receiverPubSecFuncnlArea?: DeserializedType<T, 'Edm.String'> | null;
  receiverPubSecGrant?: DeserializedType<T, 'Edm.String'> | null;
  receiverPubSecBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreementExternalI?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetRecord?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  timeSheetIsReleasedOnSave?: DeserializedType<T, 'Edm.Boolean'> | null;
  timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetIsExecutedInTestRun?: DeserializedType<T, 'Edm.Boolean'> | null;
  timeSheetOperation?: DeserializedType<T, 'Edm.String'> | null;
  parentUuid?: DeserializedType<T, 'Edm.String'> | null;
  toSapSysAdminDataChangeUser?: P_Scbo_UserType<T> | null;
  toSapSysAdminDataCreateUser?: P_Scbo_UserType<T> | null;
}
