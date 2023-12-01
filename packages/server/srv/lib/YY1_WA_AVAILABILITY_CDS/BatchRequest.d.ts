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
import { Yy1_Wa_Availability } from './index';
/**
 * Batch builder for operations supported on the Yy1 Wa Availability Cds.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1WaAvailabilityCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1WaAvailabilityCdsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Yy1 Wa Availability Cds.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteYy1WaAvailabilityCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteYy1WaAvailabilityCdsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultYy1WaAvailabilityCdsPath =
  '/sap/opu/odata/sap/YY1_WA_Availability_CDS';
export type ReadYy1WaAvailabilityCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>;
export type WriteYy1WaAvailabilityCdsRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>;
