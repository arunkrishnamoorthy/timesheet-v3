/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Overtimecategory_V } from './Yy1_Overtimecategory_V';
import { Yy1_Overtimecategory_VRequestBuilder } from './Yy1_Overtimecategory_VRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class Yy1_Overtimecategory_VApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Overtimecategory_V<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_Overtimecategory_VApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof Yy1_Overtimecategory_V;
  requestBuilder(): Yy1_Overtimecategory_VRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_Overtimecategory_V<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    Yy1_Overtimecategory_V<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof Yy1_Overtimecategory_V,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CODE: OrderableEdmTypeField<
      Yy1_Overtimecategory_V<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE_TEXT: OrderableEdmTypeField<
      Yy1_Overtimecategory_V<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISABLED: OrderableEdmTypeField<
      Yy1_Overtimecategory_V<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      Yy1_Overtimecategory_V<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
