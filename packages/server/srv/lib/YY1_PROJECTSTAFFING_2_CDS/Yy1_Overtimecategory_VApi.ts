/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Overtimecategory_V } from './Yy1_Overtimecategory_V';
import { Yy1_Overtimecategory_VRequestBuilder } from './Yy1_Overtimecategory_VRequestBuilder';
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
export class Yy1_Overtimecategory_VApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Overtimecategory_V<DeSerializersT>, DeSerializersT>
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
  ): Yy1_Overtimecategory_VApi<DeSerializersT> {
    return new Yy1_Overtimecategory_VApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_Overtimecategory_V;

  requestBuilder(): Yy1_Overtimecategory_VRequestBuilder<DeSerializersT> {
    return new Yy1_Overtimecategory_VRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Overtimecategory_V<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Yy1_Overtimecategory_V<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_Overtimecategory_V<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Yy1_Overtimecategory_V,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Overtimecategory_V,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Yy1_Overtimecategory_V<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE_TEXT: OrderableEdmTypeField<
      Yy1_Overtimecategory_V<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISABLED: OrderableEdmTypeField<
      Yy1_Overtimecategory_V<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Overtimecategory_V<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link codeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_TEXT: fieldBuilder.buildEdmTypeField(
          'Code_Text',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLED: fieldBuilder.buildEdmTypeField(
          'IsDisabled',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_Overtimecategory_V)
      };
    }

    return this._schema;
  }
}
