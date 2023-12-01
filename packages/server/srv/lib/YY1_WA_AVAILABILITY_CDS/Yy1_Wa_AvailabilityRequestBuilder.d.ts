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
import { Yy1_Wa_Availability } from './Yy1_Wa_Availability';
/**
 * Request builder class for operations supported on the {@link Yy1_Wa_Availability} entity.
 */
export declare class Yy1_Wa_AvailabilityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Wa_Availability<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Wa_Availability` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Wa_Availability` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Wa_Availability<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_Wa_Availability` entity based on its keys.
   * @param id Key property. See {@link Yy1_Wa_Availability.id}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Wa_Availability` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Wa_Availability<T>, T>;
}
