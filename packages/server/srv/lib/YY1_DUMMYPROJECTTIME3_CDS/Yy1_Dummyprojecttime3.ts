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
export class Yy1_Dummyprojecttime3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_Dummyprojecttime3Type<T>
{
  /**
   * Technical entity name for Yy1_Dummyprojecttime3.
   */
  static _entityName = 'YY1_DUMMYPROJECTTIME3';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/YY1_DUMMYPROJECTTIME3_CDS';
  /**
   * All key fields of the Yy1_Dummyprojecttime3 entity
   */
  static _keys = ['SAP_UUID'];
  /**
   * 16 Byte UUID in 16 Bytes (Raw Format).
   */
  declare sapUuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * Maximum length: 80.
   * @nullable
   */
  declare sapDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  declare sapCreatedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  declare sapCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of the Technical User Account.
   * Maximum length: 80.
   * @nullable
   */
  declare sapCreatedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  declare sapLastChangedDateTime?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * Last Changed By.
   * Maximum length: 12.
   * @nullable
   */
  declare sapLastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of the Technical User Account.
   * Maximum length: 80.
   * @nullable
   */
  declare sapLastChangedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ControllingArea.
   * Maximum length: 4.
   * @nullable
   */
  declare controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderCostCenter.
   * Maximum length: 10.
   * @nullable
   */
  declare senderCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverCostCenter.
   * Maximum length: 10.
   * @nullable
   */
  declare receiverCostCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * InternalOrder.
   * Maximum length: 12.
   * @nullable
   */
  declare internalOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ActivityType.
   * Maximum length: 6.
   * @nullable
   */
  declare activityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBSelement.
   * Maximum length: 40.
   * @nullable
   */
  declare wbSelement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WorkItem.
   * Maximum length: 10.
   * @nullable
   */
  declare workItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BillingControlCategory.
   * Maximum length: 8.
   * @nullable
   */
  declare billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PurchaseOrder.
   * Maximum length: 10.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PurchaseOrderItem.
   * Maximum length: 5.
   * @nullable
   */
  declare purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimesheetTaskType.
   * Maximum length: 4.
   * @nullable
   */
  declare timesheetTaskType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetTaskLevel.
   * Maximum length: 8.
   * @nullable
   */
  declare timeSheetTaskLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetTaskComponent.
   * Maximum length: 8.
   * @nullable
   */
  declare timeSheetTaskComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetNote.
   * Maximum length: 40.
   * @nullable
   */
  declare timeSheetNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * RecordedHours.
   * @nullable
   */
  declare recordedHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * RecordedQuantity.
   * @nullable
   */
  declare recordedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * HoursUnitOfMeasure.
   * Maximum length: 3.
   * @nullable
   */
  declare hoursUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rejection Reason.
   * Maximum length: 4.
   * @nullable
   */
  declare rejectionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetWrkLocCode.
   * Maximum length: 4.
   * @nullable
   */
  declare timeSheetWrkLocCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetOvertimeCategory.
   * Maximum length: 4.
   * @nullable
   */
  declare timeSheetOvertimeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderPubSecFund.
   * Maximum length: 10.
   * @nullable
   */
  declare senderPubSecFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SendingPubSecFunctionalArea.
   * Maximum length: 16.
   * @nullable
   */
  declare sendingPubSecFunctionalArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * SenderPubSecGrant.
   * Maximum length: 20.
   * @nullable
   */
  declare senderPubSecGrant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SenderPubSecBudgetPeriod.
   * Maximum length: 10.
   * @nullable
   */
  declare senderPubSecBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecFund.
   * Maximum length: 10.
   * @nullable
   */
  declare receiverPubSecFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecFuncnlArea.
   * Maximum length: 16.
   * @nullable
   */
  declare receiverPubSecFuncnlArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecGrant.
   * Maximum length: 20.
   * @nullable
   */
  declare receiverPubSecGrant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ReceiverPubSecBudgetPeriod.
   * Maximum length: 10.
   * @nullable
   */
  declare receiverPubSecBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PersonWorkAgreementExternalID.
   * Maximum length: 20.
   * @nullable
   */
  declare personWorkAgreementExternalI?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * CompanyCode.
   * Maximum length: 4.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetRecord.
   * Maximum length: 25.
   * @nullable
   */
  declare timeSheetRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PersonWorkAgreement.
   * Maximum length: 8.
   * @nullable
   */
  declare personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetDate.
   * @nullable
   */
  declare timeSheetDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * TimeSheetIsReleasedOnSave.
   * @nullable
   */
  declare timeSheetIsReleasedOnSave?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * TimeSheetPredecessorRecord.
   * Maximum length: 12.
   * @nullable
   */
  declare timeSheetPredecessorRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetStatus.
   * Maximum length: 2.
   * @nullable
   */
  declare timeSheetStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeSheetIsExecutedInTestRun.
   * @nullable
   */
  declare timeSheetIsExecutedInTestRun?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * TimeSheetOperation.
   * Maximum length: 1.
   * @nullable
   */
  declare timeSheetOperation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ParentUUID.
   * Maximum length: 36.
   * @nullable
   */
  declare parentUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link P_Scbo_User} entity.
   */
  declare toSapSysAdminDataChangeUser?: P_Scbo_User<T> | null;
  /**
   * One-to-one navigation property to the {@link P_Scbo_User} entity.
   */
  declare toSapSysAdminDataCreateUser?: P_Scbo_User<T> | null;

  constructor(_entityApi: Yy1_Dummyprojecttime3Api<T>) {
    super(_entityApi);
  }
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
