"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = exports.yy1Dummyprojecttime3SapUpsert = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const service_1 = require("./service");
/**
 * Yy 1 Dummyprojecttime 3 Sap Upsert.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function yy1Dummyprojecttime3SapUpsert(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        sapDescription: new odata_v2_1.OperationParameter('SAP_Description', 'Edm.String', parameters.sapDescription),
        controllingArea: new odata_v2_1.OperationParameter('ControllingArea', 'Edm.String', parameters.controllingArea),
        senderCostCenter: new odata_v2_1.OperationParameter('SenderCostCenter', 'Edm.String', parameters.senderCostCenter),
        receiverCostCenter: new odata_v2_1.OperationParameter('ReceiverCostCenter', 'Edm.String', parameters.receiverCostCenter),
        internalOrder: new odata_v2_1.OperationParameter('InternalOrder', 'Edm.String', parameters.internalOrder),
        activityType: new odata_v2_1.OperationParameter('ActivityType', 'Edm.String', parameters.activityType),
        wbSelement: new odata_v2_1.OperationParameter('WBSelement', 'Edm.String', parameters.wbSelement),
        workItem: new odata_v2_1.OperationParameter('WorkItem', 'Edm.String', parameters.workItem),
        billingControlCategory: new odata_v2_1.OperationParameter('BillingControlCategory', 'Edm.String', parameters.billingControlCategory),
        purchaseOrder: new odata_v2_1.OperationParameter('PurchaseOrder', 'Edm.String', parameters.purchaseOrder),
        purchaseOrderItem: new odata_v2_1.OperationParameter('PurchaseOrderItem', 'Edm.String', parameters.purchaseOrderItem),
        timesheetTaskType: new odata_v2_1.OperationParameter('TimesheetTaskType', 'Edm.String', parameters.timesheetTaskType),
        timeSheetTaskLevel: new odata_v2_1.OperationParameter('TimeSheetTaskLevel', 'Edm.String', parameters.timeSheetTaskLevel),
        timeSheetTaskComponent: new odata_v2_1.OperationParameter('TimeSheetTaskComponent', 'Edm.String', parameters.timeSheetTaskComponent),
        timeSheetNote: new odata_v2_1.OperationParameter('TimeSheetNote', 'Edm.String', parameters.timeSheetNote),
        recordedHours: new odata_v2_1.OperationParameter('RecordedHours', 'Edm.Decimal', parameters.recordedHours),
        recordedQuantity: new odata_v2_1.OperationParameter('RecordedQuantity', 'Edm.Decimal', parameters.recordedQuantity),
        hoursUnitOfMeasure: new odata_v2_1.OperationParameter('HoursUnitOfMeasure', 'Edm.String', parameters.hoursUnitOfMeasure),
        rejectionReason: new odata_v2_1.OperationParameter('RejectionReason', 'Edm.String', parameters.rejectionReason),
        timeSheetWrkLocCode: new odata_v2_1.OperationParameter('TimeSheetWrkLocCode', 'Edm.String', parameters.timeSheetWrkLocCode),
        timeSheetOvertimeCategory: new odata_v2_1.OperationParameter('TimeSheetOvertimeCategory', 'Edm.String', parameters.timeSheetOvertimeCategory),
        senderPubSecFund: new odata_v2_1.OperationParameter('SenderPubSecFund', 'Edm.String', parameters.senderPubSecFund),
        sendingPubSecFunctionalArea: new odata_v2_1.OperationParameter('SendingPubSecFunctionalArea', 'Edm.String', parameters.sendingPubSecFunctionalArea),
        senderPubSecGrant: new odata_v2_1.OperationParameter('SenderPubSecGrant', 'Edm.String', parameters.senderPubSecGrant),
        senderPubSecBudgetPeriod: new odata_v2_1.OperationParameter('SenderPubSecBudgetPeriod', 'Edm.String', parameters.senderPubSecBudgetPeriod),
        receiverPubSecFund: new odata_v2_1.OperationParameter('ReceiverPubSecFund', 'Edm.String', parameters.receiverPubSecFund),
        receiverPubSecFuncnlArea: new odata_v2_1.OperationParameter('ReceiverPubSecFuncnlArea', 'Edm.String', parameters.receiverPubSecFuncnlArea),
        receiverPubSecGrant: new odata_v2_1.OperationParameter('ReceiverPubSecGrant', 'Edm.String', parameters.receiverPubSecGrant),
        receiverPubSecBudgetPeriod: new odata_v2_1.OperationParameter('ReceiverPubSecBudgetPeriod', 'Edm.String', parameters.receiverPubSecBudgetPeriod),
        personWorkAgreementExternalI: new odata_v2_1.OperationParameter('PersonWorkAgreementExternalI', 'Edm.String', parameters.personWorkAgreementExternalI),
        companyCode: new odata_v2_1.OperationParameter('CompanyCode', 'Edm.String', parameters.companyCode),
        timeSheetRecord: new odata_v2_1.OperationParameter('TimeSheetRecord', 'Edm.String', parameters.timeSheetRecord),
        personWorkAgreement: new odata_v2_1.OperationParameter('PersonWorkAgreement', 'Edm.String', parameters.personWorkAgreement),
        timeSheetDate: new odata_v2_1.OperationParameter('TimeSheetDate', 'Edm.DateTime', parameters.timeSheetDate),
        timeSheetIsReleasedOnSave: new odata_v2_1.OperationParameter('TimeSheetIsReleasedOnSave', 'Edm.Boolean', parameters.timeSheetIsReleasedOnSave),
        timeSheetPredecessorRecord: new odata_v2_1.OperationParameter('TimeSheetPredecessorRecord', 'Edm.String', parameters.timeSheetPredecessorRecord),
        timeSheetStatus: new odata_v2_1.OperationParameter('TimeSheetStatus', 'Edm.String', parameters.timeSheetStatus),
        timeSheetIsExecutedInTestRun: new odata_v2_1.OperationParameter('TimeSheetIsExecutedInTestRun', 'Edm.Boolean', parameters.timeSheetIsExecutedInTestRun),
        timeSheetOperation: new odata_v2_1.OperationParameter('TimeSheetOperation', 'Edm.String', parameters.timeSheetOperation),
        parentUuid: new odata_v2_1.OperationParameter('ParentUUID', 'Edm.String', parameters.parentUuid)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/sap/opu/odata/sap/YY1_DUMMYPROJECTTIME3_CDS', 'YY1_DUMMYPROJECTTIME3Sap_upsert', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.yy1Dummyprojecttime3Cds)(deSerializers).yy1_Dummyprojecttime3Api), params, deSerializers);
}
exports.yy1Dummyprojecttime3SapUpsert = yy1Dummyprojecttime3SapUpsert;
exports.operations = {
    yy1Dummyprojecttime3SapUpsert
};
//# sourceMappingURL=operations.js.map