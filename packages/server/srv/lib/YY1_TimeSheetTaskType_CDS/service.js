"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy1TimeSheetTaskTypeCds = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_TimeSheetTaskTypeApi_1 = require("./Yy1_TimeSheetTaskTypeApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function yy1TimeSheetTaskTypeCds(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Yy1TimeSheetTaskTypeCds((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.yy1TimeSheetTaskTypeCds = yy1TimeSheetTaskTypeCds;
class Yy1TimeSheetTaskTypeCds {
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
    get yy1_TimeSheetTaskTypeApi() {
        return this.initApi('yy1_TimeSheetTaskTypeApi', Yy1_TimeSheetTaskTypeApi_1.Yy1_TimeSheetTaskTypeApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map