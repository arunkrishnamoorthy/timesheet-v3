/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { Yy1_Wa_AvailabilityApi } from './Yy1_Wa_AvailabilityApi';
/**
 * This class represents the entity "YY1_WA_Availability" of service "YY1_WA_AVAILABILITY_CDS".
 */
export declare class Yy1_Wa_Availability<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_Wa_AvailabilityType<T>
{
  /**
   * Technical entity name for Yy1_Wa_Availability.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_Wa_Availability entity
   */
  static _keys: string[];
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  person?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personWorkAgreement1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Company Code or Company.
   * Maximum length: 25.
   * @nullable
   */
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP Role.
   * Maximum length: 6.
   * @nullable
   */
  businessPartnerRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Number.
   * Maximum length: 60.
   * @nullable
   */
  personExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validity Date.
   * @nullable
   */
  calendarDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * AvailabilityInHours.
   * @nullable
   */
  availabilityInHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Year Month.
   * Maximum length: 6.
   * @nullable
   */
  yearMonth?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center Name.
   * Maximum length: 20.
   * @nullable
   */
  costCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP Role Title.
   * Maximum length: 25.
   * @nullable
   */
  businessPartnerRoleShortName?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: Yy1_Wa_AvailabilityApi<T>);
}
export interface Yy1_Wa_AvailabilityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  person?: DeserializedType<T, 'Edm.String'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreement1?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerRole?: DeserializedType<T, 'Edm.String'> | null;
  personExternalId?: DeserializedType<T, 'Edm.String'> | null;
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  calendarDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  availabilityInHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  yearMonth?: DeserializedType<T, 'Edm.String'> | null;
  costCenterName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerRoleShortName?: DeserializedType<T, 'Edm.String'> | null;
}
