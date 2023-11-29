/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Dummyproject } from './Yy1_Dummyproject';
import { Yy1_DummyprojectRequestBuilder } from './Yy1_DummyprojectRequestBuilder';
import { P_Scbo_UserApi } from './P_Scbo_UserApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class Yy1_DummyprojectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): Yy1_DummyprojectApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [P_Scbo_UserApi<DeSerializersT>, P_Scbo_UserApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof Yy1_Dummyproject;
  requestBuilder(): Yy1_DummyprojectRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Yy1_Dummyproject<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Yy1_Dummyproject<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Yy1_Dummyproject, DeSerializersT>;
  private _schema?;
  get schema(): {
    SAP_UUID: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
      'Edm.Guid',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    CUSTOMER: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    PROJECT_NAME: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    CUSTOMER_NAME: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    PROJECT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    STAND_BY_ALLOWED: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    DUMMY_PROJECT_STATUS: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    SAP_CREATED_DATE_TIME: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_CREATED_BY_USER: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    SAP_CREATED_BY_USER_TEXT: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    SAP_LAST_CHANGED_DATE_TIME: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    SAP_LAST_CHANGED_BY_USER_TEXT: OrderableEdmTypeField<
      Yy1_Dummyproject<
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
    /**
     * Static representation of the one-to-one navigation property {@link toSapSysAdminDataChangeUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SAP_SYS_ADMIN_DATA_CHANGE_USER: OneToOneLink<
      Yy1_Dummyproject<DeSerializersT>,
      DeSerializersT,
      P_Scbo_UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSapSysAdminDataCreateUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SAP_SYS_ADMIN_DATA_CREATE_USER: OneToOneLink<
      Yy1_Dummyproject<DeSerializersT>,
      DeSerializersT,
      P_Scbo_UserApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Yy1_Dummyproject<
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
