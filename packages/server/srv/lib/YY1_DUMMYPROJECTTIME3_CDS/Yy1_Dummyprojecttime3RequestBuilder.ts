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
import { Yy1_Dummyprojecttime3 } from './Yy1_Dummyprojecttime3';

/**
 * Request builder class for operations supported on the {@link Yy1_Dummyprojecttime3} entity.
 */
export class Yy1_Dummyprojecttime3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Dummyprojecttime3<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Dummyprojecttime3` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Dummyprojecttime3` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Dummyprojecttime3<T>, T> {
    return new GetAllRequestBuilder<Yy1_Dummyprojecttime3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Yy1_Dummyprojecttime3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Yy1_Dummyprojecttime3`.
   */
  create(
    entity: Yy1_Dummyprojecttime3<T>
  ): CreateRequestBuilder<Yy1_Dummyprojecttime3<T>, T> {
    return new CreateRequestBuilder<Yy1_Dummyprojecttime3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Yy1_Dummyprojecttime3` entity based on its keys.
   * @param sapUuid Key property. See {@link Yy1_Dummyprojecttime3.sapUuid}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Dummyprojecttime3` entity based on its keys.
   */
  getByKey(
    sapUuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Yy1_Dummyprojecttime3<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_Dummyprojecttime3<T>, T>(
      this.entityApi,
      { SAP_UUID: sapUuid }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Yy1_Dummyprojecttime3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Yy1_Dummyprojecttime3`.
   */
  update(
    entity: Yy1_Dummyprojecttime3<T>
  ): UpdateRequestBuilder<Yy1_Dummyprojecttime3<T>, T> {
    return new UpdateRequestBuilder<Yy1_Dummyprojecttime3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Yy1_Dummyprojecttime3`.
   * @param sapUuid Key property. See {@link Yy1_Dummyprojecttime3.sapUuid}.
   * @returns A request builder for creating requests that delete an entity of type `Yy1_Dummyprojecttime3`.
   */
  delete(sapUuid: string): DeleteRequestBuilder<Yy1_Dummyprojecttime3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Yy1_Dummyprojecttime3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Yy1_Dummyprojecttime3` by taking the entity as a parameter.
   */
  delete(
    entity: Yy1_Dummyprojecttime3<T>
  ): DeleteRequestBuilder<Yy1_Dummyprojecttime3<T>, T>;
  delete(
    sapUuidOrEntity: any
  ): DeleteRequestBuilder<Yy1_Dummyprojecttime3<T>, T> {
    return new DeleteRequestBuilder<Yy1_Dummyprojecttime3<T>, T>(
      this.entityApi,
      sapUuidOrEntity instanceof Yy1_Dummyprojecttime3
        ? sapUuidOrEntity
        : { SAP_UUID: sapUuidOrEntity! }
    );
  }
}
