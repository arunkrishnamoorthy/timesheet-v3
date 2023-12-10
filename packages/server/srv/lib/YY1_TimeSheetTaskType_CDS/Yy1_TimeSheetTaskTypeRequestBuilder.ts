/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_TimeSheetTaskType } from './Yy1_TimeSheetTaskType';

/**
 * Request builder class for operations supported on the {@link Yy1_TimeSheetTaskType} entity.
 */
export class Yy1_TimeSheetTaskTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_TimeSheetTaskType<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_TimeSheetTaskType` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_TimeSheetTaskType` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_TimeSheetTaskType<T>, T> {
    return new GetAllRequestBuilder<Yy1_TimeSheetTaskType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `Yy1_TimeSheetTaskType` entity based on its keys.
   * @param timeSheetTaskType Key property. See {@link Yy1_TimeSheetTaskType.timeSheetTaskType}.
   * @returns A request builder for creating requests to retrieve one `Yy1_TimeSheetTaskType` entity based on its keys.
   */
  getByKey(
    timeSheetTaskType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_TimeSheetTaskType<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_TimeSheetTaskType<T>, T>(
      this.entityApi,
      { TimeSheetTaskType: timeSheetTaskType }
    );
  }
}
