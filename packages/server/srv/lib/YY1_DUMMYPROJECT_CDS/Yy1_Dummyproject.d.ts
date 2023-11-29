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
import type { Yy1_DummyprojectApi } from './Yy1_DummyprojectApi';
import { P_Scbo_User, P_Scbo_UserType } from './P_Scbo_User';
/**
 * This class represents the entity "YY1_DUMMYPROJECT" of service "YY1_DUMMYPROJECT_CDS".
 */
export declare class Yy1_Dummyproject<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_DummyprojectType<T>
{
  /**
   * Technical entity name for Yy1_Dummyproject.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Dummyproject entity
   */
  static _keys: string[];
  /**
   * 16 Byte UUID in 16 Bytes (Raw Format).
   */
  sapUuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * PersonnelNumber.
   * Maximum length: 8.
   * @nullable
   */
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ProjectName.
   * Maximum length: 40.
   * @nullable
   */
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PersonFullName.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CustomerName.
   * Maximum length: 80.
   * @nullable
   */
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ProjectDescription.
   * Maximum length: 80.
   * @nullable
   */
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * StandByAllowed.
   * @nullable
   */
  standByAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Status.
   * Maximum length: 20.
   * @nullable
   */
  dummyProjectStatus?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link P_Scbo_User} entity.
   */
  toSapSysAdminDataChangeUser?: P_Scbo_User<T> | null;
  /**
   * One-to-one navigation property to the {@link P_Scbo_User} entity.
   */
  toSapSysAdminDataCreateUser?: P_Scbo_User<T> | null;
  constructor(_entityApi: Yy1_DummyprojectApi<T>);
}
export interface Yy1_DummyprojectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sapUuid: DeserializedType<T, 'Edm.Guid'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  projectName?: DeserializedType<T, 'Edm.String'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  standByAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  dummyProjectStatus?: DeserializedType<T, 'Edm.String'> | null;
  sapCreatedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sapCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  sapCreatedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  sapLastChangedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  sapLastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  sapLastChangedByUserText?: DeserializedType<T, 'Edm.String'> | null;
  toSapSysAdminDataChangeUser?: P_Scbo_UserType<T> | null;
  toSapSysAdminDataCreateUser?: P_Scbo_UserType<T> | null;
}
