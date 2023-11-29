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
import type { Yy1_Overtimecategory_VApi } from './Yy1_Overtimecategory_VApi';
/**
 * This class represents the entity "YY1_OVERTIMECATEGORY_V" of service "YY1_PROJECTSTAFFING_2_CDS".
 */
export declare class Yy1_Overtimecategory_V<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_Overtimecategory_VType<T>
{
  /**
   * Technical entity name for Yy1_Overtimecategory_V.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Overtimecategory_V entity
   */
  static _keys: string[];
  /**
   * Overtime Category.
   * Maximum length: 3.
   */
  code: DeserializedType<T, 'Edm.String'>;
  /**
   * Overtime Category (Desc.).
   * Maximum length: 60.
   * @nullable
   */
  codeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom Field: Code Disabled Indicator.
   * @nullable
   */
  isDisabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  constructor(_entityApi: Yy1_Overtimecategory_VApi<T>);
}
export interface Yy1_Overtimecategory_VType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  codeText?: DeserializedType<T, 'Edm.String'> | null;
  isDisabled?: DeserializedType<T, 'Edm.Boolean'> | null;
}
