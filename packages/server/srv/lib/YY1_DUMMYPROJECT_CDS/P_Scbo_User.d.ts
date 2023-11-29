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
import type { P_Scbo_UserApi } from './P_Scbo_UserApi';
/**
 * This class represents the entity "P_Scbo_User" of service "YY1_DUMMYPROJECT_CDS".
 */
export declare class P_Scbo_User<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements P_Scbo_UserType<T>
{
  /**
   * Technical entity name for P_Scbo_User.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the P_Scbo_User entity
   */
  static _keys: string[];
  /**
   * User Name in User Master Record.
   * Maximum length: 12.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description of the Technical User Account.
   * Maximum length: 80.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: P_Scbo_UserApi<T>);
}
export interface P_Scbo_UserType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
