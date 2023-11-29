/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  transformReturnValueForEntity,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { yy1DummyprojectCds } from './service';
import { Yy1_Dummyproject } from './Yy1_Dummyproject';
import { Yy1_DummyprojectApi } from './Yy1_DummyprojectApi';

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
export function yy1DummyprojectSapUpsert<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: Yy1DummyprojectSapUpsertParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  Yy1DummyprojectSapUpsertParameters<DeSerializersT>,
  Yy1_Dummyproject
> {
  const params = {
    personnelNumber: new OperationParameter(
      'PersonnelNumber',
      'Edm.String',
      parameters.personnelNumber
    ),
    customer: new OperationParameter(
      'Customer',
      'Edm.String',
      parameters.customer
    ),
    projectName: new OperationParameter(
      'ProjectName',
      'Edm.String',
      parameters.projectName
    ),
    personFullName: new OperationParameter(
      'PersonFullName',
      'Edm.String',
      parameters.personFullName
    ),
    customerName: new OperationParameter(
      'CustomerName',
      'Edm.String',
      parameters.customerName
    ),
    projectDescription: new OperationParameter(
      'ProjectDescription',
      'Edm.String',
      parameters.projectDescription
    ),
    standByAllowed: new OperationParameter(
      'StandByAllowed',
      'Edm.Boolean',
      parameters.standByAllowed
    ),
    dummyProjectStatus: new OperationParameter(
      'DummyProjectStatus',
      'Edm.String',
      parameters.dummyProjectStatus
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/YY1_DUMMYPROJECT_CDS',
    'YY1_DUMMYPROJECTSap_upsert',
    data =>
      transformReturnValueForEntity(
        data,
        yy1DummyprojectCds(deSerializers).yy1_DummyprojectApi
      ),
    params,
    deSerializers
  );
}

export const operations = {
  yy1DummyprojectSapUpsert
};
