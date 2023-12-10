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
import type { Yy1_TimeSheetTaskTypeApi } from './Yy1_TimeSheetTaskTypeApi';

/**
 * This class represents the entity "YY1_TimeSheetTaskType" of service "YY1_TIMESHEETTASKTYPE_CDS".
 */
export class Yy1_TimeSheetTaskType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_TimeSheetTaskTypeType<T>
{
  /**
   * Technical entity name for Yy1_TimeSheetTaskType.
   */
  static _entityName = 'YY1_TimeSheetTaskType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/YY1_TimeSheetTaskType_CDS';
  /**
   * All key fields of the Yy1_TimeSheetTaskType entity
   */
  static _keys = ['TimeSheetTaskType'];
  /**
   * Task Type.
   * Maximum length: 4.
   */
  declare timeSheetTaskType: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Type.
   * Maximum length: 4.
   * @nullable
   */
  declare timeSheetTaskType1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 25.
   * @nullable
   */
  declare timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task Type Relevance.
   * Maximum length: 1.
   * @nullable
   */
  declare timeSheetTaskTypeRelevanceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: Yy1_TimeSheetTaskTypeApi<T>) {
    super(_entityApi);
  }
}

export interface Yy1_TimeSheetTaskTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeSheetTaskType: DeserializedType<T, 'Edm.String'>;
  language?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskType1?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskTypeText?: DeserializedType<T, 'Edm.String'> | null;
  timeSheetTaskTypeRelevanceCode?: DeserializedType<T, 'Edm.String'> | null;
}
