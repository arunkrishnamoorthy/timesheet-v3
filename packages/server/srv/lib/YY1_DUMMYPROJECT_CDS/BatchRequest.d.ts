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
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  P_Scbo_User,
  Yy1_Dummyproject,
  Yy1DummyprojectSapUpsertParameters
} from './index';
/**
 * Batch builder for operations supported on the Yy1 Dummyproject Cds.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1DummyprojectCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1DummyprojectCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Yy1 Dummyproject Cds.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1DummyprojectCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1DummyprojectCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultYy1DummyprojectCdsPath =
  '/sap/opu/odata/sap/YY1_DUMMYPROJECT_CDS';
export type ReadYy1DummyprojectCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<P_Scbo_User<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<P_Scbo_User<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>;
export type WriteYy1DummyprojectCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<P_Scbo_User<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<P_Scbo_User<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<P_Scbo_User<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      Yy1DummyprojectSapUpsertParameters<DeSerializersT>,
      Yy1_Dummyproject
    >;
