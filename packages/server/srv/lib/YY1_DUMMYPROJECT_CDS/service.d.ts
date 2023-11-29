/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { P_Scbo_UserApi } from './P_Scbo_UserApi';
import { Yy1_DummyprojectApi } from './Yy1_DummyprojectApi';
import { Yy1DummyprojectSapUpsertParameters } from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function yy1DummyprojectCds<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): Yy1DummyprojectCds<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class Yy1DummyprojectCds<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get p_Scbo_UserApi(): P_Scbo_UserApi<DeSerializersT>;
  get yy1_DummyprojectApi(): Yy1_DummyprojectApi<DeSerializersT>;
  get operations(): {
    yy1DummyprojectSapUpsert: (
      parameter: Yy1DummyprojectSapUpsertParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      Yy1DummyprojectSapUpsertParameters<DeSerializersT>,
      import('./Yy1_Dummyproject').Yy1_Dummyproject<DefaultDeSerializers>
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
