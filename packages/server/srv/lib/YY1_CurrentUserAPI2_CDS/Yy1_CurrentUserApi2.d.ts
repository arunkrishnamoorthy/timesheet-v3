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
import type { Yy1_CurrentUserApi2Api } from './Yy1_CurrentUserApi2Api';
/**
 * This class represents the entity "YY1_CurrentUserAPI2" of service "YY1_CURRENTUSERAPI2_CDS".
 */
export declare class Yy1_CurrentUserApi2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_CurrentUserApi2Type<T>
{
  /**
   * Technical entity name for Yy1_CurrentUserApi2.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_CurrentUserApi2 entity
   */
  static _keys: string[];
  /**
   * User ID.
   * Maximum length: 12.
   */
  userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internet user alias.
   * Maximum length: 40.
   * @nullable
   */
  userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner GUID.
   * @nullable
   */
  businessPartnerUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Description of the Technical User Account.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name of Business Partner (Person).
   * Maximum length: 40.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name of Business Partner (Person).
   * Maximum length: 40.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Agreement External ID.
   * Maximum length: 20.
   * @nullable
   */
  personWorkAgreementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BP Role.
   * Maximum length: 6.
   * @nullable
   */
  businessPartnerRole?: DeserializedType<T, 'Edm.String'> | null;
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
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   * @nullable
   */
  validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  constructor(_entityApi: Yy1_CurrentUserApi2Api<T>);
}
export interface Yy1_CurrentUserApi2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  personFullName?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreement?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  personWorkAgreementExternalId?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerRole?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
