/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { P_Scbo_User } from './P_Scbo_User';
import { P_Scbo_UserRequestBuilder } from './P_Scbo_UserRequestBuilder';
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
export declare class P_Scbo_UserApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<P_Scbo_User<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): P_Scbo_UserApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof P_Scbo_User;
  requestBuilder(): P_Scbo_UserRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    P_Scbo_User<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<P_Scbo_User<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof P_Scbo_User, DeSerializersT>;
  private _schema?;
  get schema(): {
    NAME: OrderableEdmTypeField<
      P_Scbo_User<
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
    DESCRIPTION: OrderableEdmTypeField<
      P_Scbo_User<
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
    ALL_FIELDS: AllFields<
      P_Scbo_User<
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
