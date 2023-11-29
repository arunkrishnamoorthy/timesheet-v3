"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy1Projectstaffing2Cds = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Overtimecategory_VApi_1 = require("./Yy1_Overtimecategory_VApi");
const Yy1_ProjectStaffing_2Api_1 = require("./Yy1_ProjectStaffing_2Api");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function yy1Projectstaffing2Cds(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Yy1Projectstaffing2Cds((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.yy1Projectstaffing2Cds = yy1Projectstaffing2Cds;
class Yy1Projectstaffing2Cds {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get yy1_Overtimecategory_VApi() {
        return this.initApi('yy1_Overtimecategory_VApi', Yy1_Overtimecategory_VApi_1.Yy1_Overtimecategory_VApi);
    }
    get yy1_ProjectStaffing_2Api() {
        const api = this.initApi('yy1_ProjectStaffing_2Api', Yy1_ProjectStaffing_2Api_1.Yy1_ProjectStaffing_2Api);
        const linkedApis = [
            this.initApi('yy1_Overtimecategory_VApi', Yy1_Overtimecategory_VApi_1.Yy1_Overtimecategory_VApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map