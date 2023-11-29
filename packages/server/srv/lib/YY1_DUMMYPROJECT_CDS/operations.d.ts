/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Yy1_Dummyproject } from './Yy1_Dummyproject';
/**
 * Type of the parameters to be passed to {@link yy1DummyprojectSapUpsert}.
 */
export interface Yy1DummyprojectSapUpsertParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Personnel Number.
   */
  personnelNumber?: string | null;
  /**
   * Customer.
   */
  customer?: string | null;
  /**
   * Project Name.
   */
  projectName?: string | null;
  /**
   * Person Full Name.
   */
  personFullName?: string | null;
  /**
   * Customer Name.
   */
  customerName?: string | null;
  /**
   * Project Description.
   */
  projectDescription?: string | null;
  /**
   * Stand By Allowed.
   */
  standByAllowed?: boolean | null;
  /**
   * Dummy Project Status.
   */
  dummyProjectStatus?: string | null;
}
/**
 * Yy 1 Dummyproject Sap Upsert.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function yy1DummyprojectSapUpsert<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: Yy1DummyprojectSapUpsertParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  Yy1DummyprojectSapUpsertParameters<DeSerializersT>,
  Yy1_Dummyproject
>;
export declare const operations: {
  yy1DummyprojectSapUpsert: typeof yy1DummyprojectSapUpsert;
};
