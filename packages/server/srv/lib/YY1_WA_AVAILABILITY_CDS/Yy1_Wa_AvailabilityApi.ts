/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Yy1_Wa_Availability } from './Yy1_Wa_Availability';
import { Yy1_Wa_AvailabilityRequestBuilder } from './Yy1_Wa_AvailabilityRequestBuilder';
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
export class Yy1_Wa_AvailabilityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>
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
  ): Yy1_Wa_AvailabilityApi<DeSerializersT> {
    return new Yy1_Wa_AvailabilityApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Yy1_Wa_Availability;

  requestBuilder(): Yy1_Wa_AvailabilityRequestBuilder<DeSerializersT> {
    return new Yy1_Wa_AvailabilityRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Yy1_Wa_Availability<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Yy1_Wa_Availability<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Yy1_Wa_Availability<DeSerializersT>,
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
    typeof Yy1_Wa_Availability,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Yy1_Wa_Availability,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_FULL_NAME: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT_1: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE_NAME: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_ROLE: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_EXTERNAL_ID: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_WORK_AGREEMENT: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_DATE: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    AVAILABILITY_IN_HOURS: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    YEAR_MONTH: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_NAME: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_ROLE_SHORT_NAME: OrderableEdmTypeField<
      Yy1_Wa_Availability<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Yy1_Wa_Availability<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link person} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true),
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
         * Static representation of the {@link personWorkAgreement1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT_1: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreement_1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER: fieldBuilder.buildEdmTypeField(
          'CostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_ROLE: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerRole',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personExternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'PersonExternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'BusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personWorkAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_WORK_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'PersonWorkAgreement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_DATE: fieldBuilder.buildEdmTypeField(
          'CalendarDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link availabilityInHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABILITY_IN_HOURS: fieldBuilder.buildEdmTypeField(
          'AvailabilityInHours',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link yearMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_MONTH: fieldBuilder.buildEdmTypeField(
          'YearMonth',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_NAME: fieldBuilder.buildEdmTypeField(
          'CostCenterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerRoleShortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_ROLE_SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerRoleShortName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Yy1_Wa_Availability)
      };
    }

    return this._schema;
  }
}
