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
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { Yy1_Overtimecategory_V, Yy1_ProjectStaffing_2 } from './index';

/**
 * Batch builder for operations supported on the Yy1 Projectstaffing 2 Cds.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultYy1Projectstaffing2CdsPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Yy1 Projectstaffing 2 Cds.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>
    | Array<WriteYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteYy1Projectstaffing2CdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultYy1Projectstaffing2CdsPath =
  '/sap/opu/odata/sap/YY1_PROJECTSTAFFING_2_CDS';
export type ReadYy1Projectstaffing2CdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Yy1_Overtimecategory_V<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Yy1_ProjectStaffing_2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Yy1_Overtimecategory_V<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Yy1_ProjectStaffing_2<DeSerializersT>,
      DeSerializersT
    >;
export type WriteYy1Projectstaffing2CdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Yy1_Overtimecategory_V<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_Overtimecategory_V<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_Overtimecategory_V<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Yy1_ProjectStaffing_2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_ProjectStaffing_2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_ProjectStaffing_2<DeSerializersT>, DeSerializersT>;
