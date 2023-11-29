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
import { Yy1_ProjectStaffing_2 } from './Yy1_ProjectStaffing_2';
/**
 * Request builder class for operations supported on the {@link Yy1_ProjectStaffing_2} entity.
 */
export declare class Yy1_ProjectStaffing_2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_ProjectStaffing_2<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_ProjectStaffing_2` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_ProjectStaffing_2` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_ProjectStaffing_2<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_ProjectStaffing_2` entity based on its keys.
   * @param id Key property. See {@link Yy1_ProjectStaffing_2.id}.
   * @returns A request builder for creating requests to retrieve one `Yy1_ProjectStaffing_2` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_ProjectStaffing_2<T>, T>;
}
