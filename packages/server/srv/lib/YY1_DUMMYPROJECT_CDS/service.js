"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yy1DummyprojectCds = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const P_Scbo_UserApi_1 = require("./P_Scbo_UserApi");
const Yy1_DummyprojectApi_1 = require("./Yy1_DummyprojectApi");
const operations_1 = require("./operations");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function yy1DummyprojectCds(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new Yy1DummyprojectCds((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.yy1DummyprojectCds = yy1DummyprojectCds;
class Yy1DummyprojectCds {
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
    get p_Scbo_UserApi() {
        return this.initApi('p_Scbo_UserApi', P_Scbo_UserApi_1.P_Scbo_UserApi);
    }
    get yy1_DummyprojectApi() {
        const api = this.initApi('yy1_DummyprojectApi', Yy1_DummyprojectApi_1.Yy1_DummyprojectApi);
        const linkedApis = [
            this.initApi('p_Scbo_UserApi', P_Scbo_UserApi_1.P_Scbo_UserApi),
            this.initApi('p_Scbo_UserApi', P_Scbo_UserApi_1.P_Scbo_UserApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get operations() {
        return {
            yy1DummyprojectSapUpsert: (parameter) => (0, operations_1.yy1DummyprojectSapUpsert)(parameter, this.deSerializers)
        };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map