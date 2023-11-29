/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { P_Scbo_UserApi } from './P_Scbo_UserApi';
import { Yy1_Dummyprojecttime3Api } from './Yy1_Dummyprojecttime3Api';
import {
  yy1Dummyprojecttime3SapUpsert,
  Yy1Dummyprojecttime3SapUpsertParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function yy1Dummyprojecttime3Cds<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
): Yy1Dummyprojecttime3Cds<
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
> {
  return new Yy1Dummyprojecttime3Cds(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class Yy1Dummyprojecttime3Cds<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get p_Scbo_UserApi(): P_Scbo_UserApi<DeSerializersT> {
    return this.initApi('p_Scbo_UserApi', P_Scbo_UserApi);
  }

  get yy1_Dummyprojecttime3Api(): Yy1_Dummyprojecttime3Api<DeSerializersT> {
    const api = this.initApi(
      'yy1_Dummyprojecttime3Api',
      Yy1_Dummyprojecttime3Api
    );
    const linkedApis = [
      this.initApi('p_Scbo_UserApi', P_Scbo_UserApi),
      this.initApi('p_Scbo_UserApi', P_Scbo_UserApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get operations() {
    return {
      yy1Dummyprojecttime3SapUpsert: (
        parameter: Yy1Dummyprojecttime3SapUpsertParameters<DeSerializersT>
      ) => yy1Dummyprojecttime3SapUpsert(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
