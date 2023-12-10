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
import { Yy1_TimeSheetTaskType } from './index';

/**
 * Batch builder for operations supported on the Yy1 TimeSheetTaskType Cds.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultYy1TimeSheetTaskTypeCdsPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Yy1 TimeSheetTaskType Cds.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | Array<WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultYy1TimeSheetTaskTypeCdsPath =
  '/sap/opu/odata/sap/YY1_TimeSheetTaskType_CDS';
export type ReadYy1TimeSheetTaskTypeCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Yy1_TimeSheetTaskType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Yy1_TimeSheetTaskType<DeSerializersT>,
      DeSerializersT
    >;
export type WriteYy1TimeSheetTaskTypeCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Yy1_TimeSheetTaskType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_TimeSheetTaskType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_TimeSheetTaskType<DeSerializersT>, DeSerializersT>;
