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
import { Yy1_Overtimecategory_V } from './Yy1_Overtimecategory_V';

/**
 * Request builder class for operations supported on the {@link Yy1_Overtimecategory_V} entity.
 */
export class Yy1_Overtimecategory_VRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Overtimecategory_V<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Overtimecategory_V` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Overtimecategory_V` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Overtimecategory_V<T>, T> {
    return new GetAllRequestBuilder<Yy1_Overtimecategory_V<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `Yy1_Overtimecategory_V` entity based on its keys.
   * @param code Key property. See {@link Yy1_Overtimecategory_V.code}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Overtimecategory_V` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Overtimecategory_V<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_Overtimecategory_V<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }
}
