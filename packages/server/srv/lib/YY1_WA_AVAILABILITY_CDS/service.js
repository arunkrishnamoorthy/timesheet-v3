"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy1WaAvailabilityCds = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Yy1_Wa_AvailabilityApi_1 = require("./Yy1_Wa_AvailabilityApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function yy1WaAvailabilityCds(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Yy1WaAvailabilityCds((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.yy1WaAvailabilityCds = yy1WaAvailabilityCds;
class Yy1WaAvailabilityCds {
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
    get yy1_Wa_AvailabilityApi() {
        return this.initApi('yy1_Wa_AvailabilityApi', Yy1_Wa_AvailabilityApi_1.Yy1_Wa_AvailabilityApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map