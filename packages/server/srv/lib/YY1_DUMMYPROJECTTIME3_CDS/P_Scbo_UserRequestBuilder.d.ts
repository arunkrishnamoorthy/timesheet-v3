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
import { P_Scbo_User } from './P_Scbo_User';
/**
 * Request builder class for operations supported on the {@link P_Scbo_User} entity.
 */
export declare class P_Scbo_UserRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<P_Scbo_User<T>, T> {
  /**
   * Returns a request builder for querying all `P_Scbo_User` entities.
   * @returns A request builder for creating requests to retrieve all `P_Scbo_User` entities.
   */
  getAll(): GetAllRequestBuilder<P_Scbo_User<T>, T>;
  /**
   * Returns a request builder for retrieving one `P_Scbo_User` entity based on its keys.
   * @param name Key property. See {@link P_Scbo_User.name}.
   * @returns A request builder for creating requests to retrieve one `P_Scbo_User` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<P_Scbo_User<T>, T>;
}
