/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_TimeSheetTaskType } from './Yy1_TimeSheetTaskType';
import { Yy1_TimeSheetTaskTypeRequestBuilder } from './Yy1_TimeSheetTaskTypeRequestBuilder';
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
export class Yy1_TimeSheetTaskTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_TimeSheetTaskType<DeSerializersT>, DeSerializersT>
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
  ): Yy1_TimeSheetTaskTypeApi<DeSerializersT> {
    return new Yy1_TimeSheetTaskTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_TimeSheetTaskType;

  requestBuilder(): Yy1_TimeSheetTaskTypeRequestBuilder<DeSerializersT> {
    return new Yy1_TimeSheetTaskTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_TimeSheetTaskType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_TimeSheetTaskType<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_TimeSheetTaskType<DeSerializersT>,
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
    typeof Yy1_TimeSheetTaskType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_TimeSheetTaskType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_SHEET_TASK_TYPE: OrderableEdmTypeField<
      Yy1_TimeSheetTaskType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      Yy1_TimeSheetTaskType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_TYPE_1: OrderableEdmTypeField<
      Yy1_TimeSheetTaskType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_TYPE_TEXT: OrderableEdmTypeField<
      Yy1_TimeSheetTaskType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_SHEET_TASK_TYPE_RELEVANCE_CODE: OrderableEdmTypeField<
      Yy1_TimeSheetTaskType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_TimeSheetTaskType<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link timeSheetTaskType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TASK_TYPE: fieldBuilder.buildEdmTypeField(
          'TimeSheetTaskType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetTaskType1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TASK_TYPE_1: fieldBuilder.buildEdmTypeField(
          'TimeSheetTaskType_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetTaskTypeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TASK_TYPE_TEXT: fieldBuilder.buildEdmTypeField(
          'TimeSheetTaskTypeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeSheetTaskTypeRelevanceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_TASK_TYPE_RELEVANCE_CODE: fieldBuilder.buildEdmTypeField(
          'TimeSheetTaskTypeRelevanceCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_TimeSheetTaskType)
      };
    }

    return this._schema;
  }
}
