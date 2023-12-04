/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_CurrentUserApi2 } from './index';
/**
 * Batch builder for operations supported on the Yy1 CurrentUserApi2 Cds.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1CurrentUserApi2CdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1CurrentUserApi2CdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Yy1 CurrentUserApi2 Cds.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1CurrentUserApi2CdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1CurrentUserApi2CdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultYy1CurrentUserApi2CdsPath =
  '/sap/opu/odata/sap/YY1_CurrentUserAPI2_CDS';
export type ReadYy1CurrentUserApi2CdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Yy1_CurrentUserApi2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Yy1_CurrentUserApi2<DeSerializersT>, DeSerializersT>;
export type WriteYy1CurrentUserApi2CdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Yy1_CurrentUserApi2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_CurrentUserApi2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_CurrentUserApi2<DeSerializersT>, DeSerializersT>;
