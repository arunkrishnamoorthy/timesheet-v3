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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class Yy1_DummyprojectApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>
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
  ): Yy1_DummyprojectApi<DeSerializersT> {
    return new Yy1_DummyprojectApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [P_Scbo_UserApi<DeSerializersT>, P_Scbo_UserApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_SAP_SYS_ADMIN_DATA_CHANGE_USER: new OneToOneLink(
        'to_SAPSysAdminDataChangeUser',
        this,
        linkedApis[0]
      ),
      TO_SAP_SYS_ADMIN_DATA_CREATE_USER: new OneToOneLink(
        'to_SAPSysAdminDataCreateUser',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Yy1_Dummyproject;

  requestBuilder(): Yy1_DummyprojectRequestBuilder<DeSerializersT> {
    return new Yy1_DummyprojectRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Dummyproject<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Dummyproject<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Yy1_Dummyproject<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Yy1_Dummyproject, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Dummyproject,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SAP_UUID: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DESCRIPTION: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAND_BY_ALLOWED: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DUMMY_PROJECT_STATUS: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_CREATED_DATE_TIME: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_CREATED_BY_USER: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_CREATED_BY_USER_TEXT: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_LAST_CHANGED_DATE_TIME: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SAP_LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_LAST_CHANGED_BY_USER_TEXT: OrderableEdmTypeField<
      Yy1_Dummyproject<DeSerializers>,
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
    ALL_FIELDS: AllFields<Yy1_Dummyproject<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sapUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_UUID: fieldBuilder.buildEdmTypeField('SAP_UUID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'PersonFullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProjectDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standByAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAND_BY_ALLOWED: fieldBuilder.buildEdmTypeField(
          'StandByAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link dummyProjectStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUMMY_PROJECT_STATUS: fieldBuilder.buildEdmTypeField(
          'DummyProjectStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SAP_CreatedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link sapCreatedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'SAP_CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapCreatedByUserText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_CREATED_BY_USER_TEXT: fieldBuilder.buildEdmTypeField(
          'SAP_CreatedByUser_Text',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapLastChangedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_LAST_CHANGED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SAP_LastChangedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link sapLastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'SAP_LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapLastChangedByUserText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_LAST_CHANGED_BY_USER_TEXT: fieldBuilder.buildEdmTypeField(
          'SAP_LastChangedByUser_Text',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_Dummyproject)
      };
    }

    return this._schema;
  }
}
