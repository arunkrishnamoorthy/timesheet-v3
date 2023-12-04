"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yy1_CurrentUserApi2RequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Yy1_CurrentUserApi2} entity.
 */
class Yy1_CurrentUserApi2RequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Yy1_CurrentUserApi2` entities.
     * @returns A request builder for creating requests to retrieve all `Yy1_CurrentUserApi2` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `Yy1_CurrentUserApi2` entity based on its keys.
     * @param userId Key property. See {@link Yy1_CurrentUserApi2.userId}.
     * @returns A request builder for creating requests to retrieve one `Yy1_CurrentUserApi2` entity based on its keys.
     */
    getByKey(userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { UserID: userId });
    }
}
exports.Yy1_CurrentUserApi2RequestBuilder = Yy1_CurrentUserApi2RequestBuilder;
//# sourceMappingURL=Yy1_CurrentUserApi2RequestBuilder.js.map