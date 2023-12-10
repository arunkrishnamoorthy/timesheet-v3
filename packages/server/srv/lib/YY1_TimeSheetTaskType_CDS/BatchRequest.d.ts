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
import { Yy1_TimeSheetTaskType } from './index';
/**
 * Batch builder for operations supported on the Yy1 TimeSheetTaskType Cds.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Yy1 TimeSheetTaskType Cds.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1TimeSheetTaskTypeCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultYy1TimeSheetTaskTypeCdsPath =
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
