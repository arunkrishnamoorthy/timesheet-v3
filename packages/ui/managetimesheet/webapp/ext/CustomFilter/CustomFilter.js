sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
    "use strict";
    return {
        FunctionName: function(sValue) {
            switch (sValue) {
                case "0":
                        return new Filter({ path: "EndDate", operator: FilterOperator.LT, value1: '20231201' });
                case "1":
                        return new Filter({
                        filters: [
                            new Filter({ path: "EndDate", operator: FilterOperator.LT, value1: '20231201' })
                        ],
                        and: true
                    });
                case "2":
                    return new Filter({ path: "EndDate", operator: FilterOperator.LT, value1: '20231201' });
            }
        }
    };
});
