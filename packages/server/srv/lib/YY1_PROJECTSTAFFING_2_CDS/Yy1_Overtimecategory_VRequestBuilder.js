"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_Overtimecategory_VRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Yy1_Overtimecategory_V} entity.
 */
class Yy1_Overtimecategory_VRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Yy1_Overtimecategory_V` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_Overtimecategory_V` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Yy1_Overtimecategory_V` entity based on its keys.
     * @param code Key property. See {@link Yy1_Overtimecategory_V.code}.
     * @returns A request builder for creating requests to retrieve one `Yy1_Overtimecategory_V` entity based on its keys.
     */
    getByKey(code) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Code: code });
    }
}
exports.Yy1_Overtimecategory_VRequestBuilder = Yy1_Overtimecategory_VRequestBuilder;
//# sourceMappingURL=Yy1_Overtimecategory_VRequestBuilder.js.map