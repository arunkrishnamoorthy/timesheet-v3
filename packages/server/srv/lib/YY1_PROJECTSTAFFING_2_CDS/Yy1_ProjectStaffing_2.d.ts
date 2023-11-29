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
import type { Yy1_ProjectStaffing_2Api } from './Yy1_ProjectStaffing_2Api';
import {
  Yy1_Overtimecategory_V,
  Yy1_Overtimecategory_VType
} from './Yy1_Overtimecategory_V';
/**
 * This class represents the entity "YY1_ProjectStaffing_2" of service "YY1_PROJECTSTAFFING_2_CDS".
 */
export declare class Yy1_ProjectStaffing_2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_ProjectStaffing_2Type<T>
{
  /**
   * Technical entity name for Yy1_ProjectStaffing_2.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Yy1_ProjectStaffing_2 entity
   */
  static _keys: string[];
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Line GUID.
   * @nullable
   */
  planLineItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engagement Project ID.
   * Maximum length: 40.
   * @nullable
   */
  engagementProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period.
   * Maximum length: 3.
   * @nullable
   */
  fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBS Element.
   * Maximum length: 8.
   * @nullable
   */
  wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Item.
   * Maximum length: 50.
   * @nullable
   */
  workPackage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource ID.
   * Maximum length: 40.
   * @nullable
   */
  engagementProjectResource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  person?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object ID.
   * Maximum length: 8.
   * @nullable
   */
  employmentInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Control Category.
   * Maximum length: 8.
   * @nullable
   */
  billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Organization.
   * Maximum length: 5.
   * @nullable
   */
  deliveryOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Quantity.
   * @nullable
   */
  plndEffortQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount.
   * @nullable
   */
  plndRevnAmt?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Plan Item Description.
   * Maximum length: 60.
   * @nullable
   */
  workPackageName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  workPackageStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  workPackageEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Currency.
   * Maximum length: 5.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Type ID.
   * Maximum length: 4.
   * @nullable
   */
  engagementProjectResourceType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * Maximum length: 10.
   * @nullable
   */
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number of Purchase Order.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * Maximum length: 10.
   * @nullable
   */
  purchaseOrder1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number of Purchase Order.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderItem1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignment Status for a Resource Demand.
   * Maximum length: 1.
   * @nullable
   */
  resourceRequestStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overtime Category.
   * Maximum length: 3.
   * @nullable
   */
  yy1OvertimeCategoryCpd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ASTRID ID2.
   * Maximum length: 9.
   * @nullable
   */
  yy1Astridid2Cpd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Unit Key.
   * Maximum length: 20.
   * @nullable
   */
  costCenter1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Project Name.
   * Maximum length: 40.
   * @nullable
   */
  engagementProjectName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Commercial Project: Stage.
   * Maximum length: 4.
   * @nullable
   */
  engagementProjectStage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date for Period of Performance.
   * @nullable
   */
  performancePeriodStartDate1?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date for Period of Performance.
   * @nullable
   */
  performancePeriodEndDate1?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Delivery Schedule Line Counter.
   * Maximum length: 4.
   * @nullable
   */
  purchaseOrderScheduleLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date for Period of Performance.
   * @nullable
   */
  performancePeriodStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date for Period of Performance.
   * @nullable
   */
  performancePeriodEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Delivery Schedule Line Counter.
   * Maximum length: 4.
   * @nullable
   */
  purchaseOrderScheduleLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  costCenterControllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   * @nullable
   */
  costCenterValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * PurchaseOrderCalculated.
   * Maximum length: 10.
   * @nullable
   */
  purchaseOrderCalculated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PurchaseOrderItemCalculated.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderItemCalculated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * POStartDateCalculated.
   * @nullable
   */
  poStartDateCalculated?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * POEndDateCalculated.
   * @nullable
   */
  poEndDateCalculated?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  partner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  customerName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * DisplayCustomerName.
   * Maximum length: 80.
   * @nullable
   */
  displayCustomerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Yy1_Overtimecategory_V} entity.
   */
  toYy1OvertimeCategoryCpd?: Yy1_Overtimecategory_V<T> | null;
  constructor(_entityApi: Yy1_ProjectStaffing_2Api<T>);
}
export interface Yy1_ProjectStaffing_2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  planLineItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  engagementProject?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  workPackage?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjectResource?: DeserializedType<T, 'Edm.String'> | null;
  person?: DeserializedType<T, 'Edm.String'> | null;
  employmentInternalId?: DeserializedType<T, 'Edm.String'> | null;
  billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  deliveryOrganization?: DeserializedType<T, 'Edm.String'> | null;
  plndEffortQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  plndRevnAmt?: DeserializedType<T, 'Edm.Decimal'> | null;
  workPackageName?: DeserializedType<T, 'Edm.String'> | null;
  workPackageStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  workPackageEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjectResourceType?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrder1?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderItem1?: DeserializedType<T, 'Edm.String'> | null;
  resourceRequestStatus?: DeserializedType<T, 'Edm.String'> | null;
  yy1OvertimeCategoryCpd?: DeserializedType<T, 'Edm.String'> | null;
  yy1Astridid2Cpd?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  costCenter1?: DeserializedType<T, 'Edm.String'> | null;
  engagementProjectName?: DeserializedType<T, 'Edm.String'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  engagementProjectStage?: DeserializedType<T, 'Edm.String'> | null;
  performancePeriodStartDate1?: DeserializedType<T, 'Edm.DateTime'> | null;
  performancePeriodEndDate1?: DeserializedType<T, 'Edm.DateTime'> | null;
  purchaseOrderScheduleLine1?: DeserializedType<T, 'Edm.String'> | null;
  performancePeriodStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  performancePeriodEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  purchaseOrderScheduleLine?: DeserializedType<T, 'Edm.String'> | null;
  costCenterControllingArea?: DeserializedType<T, 'Edm.String'> | null;
  costCenterValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  purchaseOrderCalculated?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderItemCalculated?: DeserializedType<T, 'Edm.String'> | null;
  poStartDateCalculated?: DeserializedType<T, 'Edm.DateTime'> | null;
  poEndDateCalculated?: DeserializedType<T, 'Edm.DateTime'> | null;
  partner?: DeserializedType<T, 'Edm.String'> | null;
  customerName1?: DeserializedType<T, 'Edm.String'> | null;
  displayCustomerName?: DeserializedType<T, 'Edm.String'> | null;
  toYy1OvertimeCategoryCpd?: Yy1_Overtimecategory_VType<T> | null;
}
