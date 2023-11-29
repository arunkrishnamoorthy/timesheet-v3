"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_Scbo_UserRequestBuilder = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link P_Scbo_User} entity.
 */
class P_Scbo_UserRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `P_Scbo_User` entities.
     * @returns A request builder for creating requests to retrieve all `P_Scbo_User` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `P_Scbo_User` entity based on its keys.
     * @param name Key property. See {@link P_Scbo_User.name}.
     * @returns A request builder for creating requests to retrieve one `P_Scbo_User` entity based on its keys.
     */
    getByKey(name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            name: name
        });
    }
}
exports.P_Scbo_UserRequestBuilder = P_Scbo_UserRequestBuilder;
//# sourceMappingURL=P_Scbo_UserRequestBuilder.js.map