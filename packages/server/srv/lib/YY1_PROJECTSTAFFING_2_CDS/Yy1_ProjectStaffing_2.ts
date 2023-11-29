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
export class Yy1_ProjectStaffing_2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_ProjectStaffing_2Type<T>
{
  /**
   * Technical entity name for Yy1_ProjectStaffing_2.
   */
  static _entityName = 'YY1_ProjectStaffing_2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/YY1_PROJECTSTAFFING_2_CDS';
  /**
   * All key fields of the Yy1_ProjectStaffing_2 entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Line GUID.
   * @nullable
   */
  declare planLineItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  declare fiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engagement Project ID.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period.
   * Maximum length: 3.
   * @nullable
   */
  declare fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WBS Element.
   * Maximum length: 8.
   * @nullable
   */
  declare wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Item.
   * Maximum length: 50.
   * @nullable
   */
  declare workPackage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource ID.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProjectResource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  declare person?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object ID.
   * Maximum length: 8.
   * @nullable
   */
  declare employmentInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Control Category.
   * Maximum length: 8.
   * @nullable
   */
  declare billingControlCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Organization.
   * Maximum length: 5.
   * @nullable
   */
  declare deliveryOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Quantity.
   * @nullable
   */
  declare plndEffortQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount.
   * @nullable
   */
  declare plndRevnAmt?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Plan Item Description.
   * Maximum length: 60.
   * @nullable
   */
  declare workPackageName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  declare workPackageStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  declare workPackageEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Type ID.
   * Maximum length: 4.
   * @nullable
   */
  declare engagementProjectResourceType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Order Number.
   * Maximum length: 10.
   * @nullable
   */
  declare purchaseOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number of Purchase Order.
   * Maximum length: 5.
   * @nullable
   */
  declare purchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Number.
   * Maximum length: 10.
   * @nullable
   */
  declare purchaseOrder1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number of Purchase Order.
   * Maximum length: 5.
   * @nullable
   */
  declare purchaseOrderItem1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignment Status for a Resource Demand.
   * Maximum length: 1.
   * @nullable
   */
  declare resourceRequestStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overtime Category.
   * Maximum length: 3.
   * @nullable
   */
  declare yy1OvertimeCategoryCpd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ASTRID ID2.
   * Maximum length: 9.
   * @nullable
   */
  declare yy1Astridid2Cpd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Unit Key.
   * Maximum length: 20.
   * @nullable
   */
  declare costCenter1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Project Name.
   * Maximum length: 40.
   * @nullable
   */
  declare engagementProjectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   * @nullable
   */
  declare startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * End Date.
   * @nullable
   */
  declare endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Commercial Project: Stage.
   * Maximum length: 4.
   * @nullable
   */
  declare engagementProjectStage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date for Period of Performance.
   * @nullable
   */
  declare performancePeriodStartDate1?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * End Date for Period of Performance.
   * @nullable
   */
  declare performancePeriodEndDate1?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Delivery Schedule Line Counter.
   * Maximum length: 4.
   * @nullable
   */
  declare purchaseOrderScheduleLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date for Period of Performance.
   * @nullable
   */
  declare performancePeriodStartDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * End Date for Period of Performance.
   * @nullable
   */
  declare performancePeriodEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Delivery Schedule Line Counter.
   * Maximum length: 4.
   * @nullable
   */
  declare purchaseOrderScheduleLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  declare costCenterControllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To Date.
   * @nullable
   */
  declare costCenterValidityEndDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * PurchaseOrderCalculated.
   * Maximum length: 10.
   * @nullable
   */
  declare purchaseOrderCalculated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PurchaseOrderItemCalculated.
   * Maximum length: 5.
   * @nullable
   */
  declare purchaseOrderItemCalculated?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * POStartDateCalculated.
   * @nullable
   */
  declare poStartDateCalculated?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * POEndDateCalculated.
   * @nullable
   */
  declare poEndDateCalculated?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  declare partner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  declare customerName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * DisplayCustomerName.
   * Maximum length: 80.
   * @nullable
   */
  declare displayCustomerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Yy1_Overtimecategory_V} entity.
   */
  declare toYy1OvertimeCategoryCpd?: Yy1_Overtimecategory_V<T> | null;

  constructor(_entityApi: Yy1_ProjectStaffing_2Api<T>) {
    super(_entityApi);
  }
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
