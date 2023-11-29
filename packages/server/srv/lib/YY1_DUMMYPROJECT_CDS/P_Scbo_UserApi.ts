/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { P_Scbo_User } from './P_Scbo_User';
import { P_Scbo_UserRequestBuilder } from './P_Scbo_UserRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class P_Scbo_UserApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<P_Scbo_User<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): P_Scbo_UserApi<DeSerializersT> {
    return new P_Scbo_UserApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = P_Scbo_User;

  requestBuilder(): P_Scbo_UserRequestBuilder<DeSerializersT> {
    return new P_Scbo_UserRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    P_Scbo_User<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<P_Scbo_User<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<P_Scbo_User<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof P_Scbo_User, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(P_Scbo_User, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      P_Scbo_User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      P_Scbo_User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<P_Scbo_User<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', P_Scbo_User)
      };
    }

    return this._schema;
  }
}
