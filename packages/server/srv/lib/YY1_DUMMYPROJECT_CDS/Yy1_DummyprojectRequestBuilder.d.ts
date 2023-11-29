/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_Dummyproject } from './Yy1_Dummyproject';
/**
 * Request builder class for operations supported on the {@link Yy1_Dummyproject} entity.
 */
export declare class Yy1_DummyprojectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Dummyproject<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Dummyproject` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Dummyproject` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Dummyproject<T>, T>;
  /**
   * Returns a request builder for creating a `Yy1_Dummyproject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Yy1_Dummyproject`.
   */
  create(
    entity: Yy1_Dummyproject<T>
  ): CreateRequestBuilder<Yy1_Dummyproject<T>, T>;
  /**
   * Returns a request builder for retrieving one `Yy1_Dummyproject` entity based on its keys.
   * @param sapUuid Key property. See {@link Yy1_Dummyproject.sapUuid}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Dummyproject` entity based on its keys.
   */
  getByKey(
    sapUuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Yy1_Dummyproject<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Yy1_Dummyproject`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Yy1_Dummyproject`.
   */
  update(
    entity: Yy1_Dummyproject<T>
  ): UpdateRequestBuilder<Yy1_Dummyproject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Yy1_Dummyproject`.
   * @param sapUuid Key property. See {@link Yy1_Dummyproject.sapUuid}.
   * @returns A request builder for creating requests that delete an entity of type `Yy1_Dummyproject`.
   */
  delete(sapUuid: string): DeleteRequestBuilder<Yy1_Dummyproject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Yy1_Dummyproject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Yy1_Dummyproject` by taking the entity as a parameter.
   */
  delete(
    entity: Yy1_Dummyproject<T>
  ): DeleteRequestBuilder<Yy1_Dummyproject<T>, T>;
}
