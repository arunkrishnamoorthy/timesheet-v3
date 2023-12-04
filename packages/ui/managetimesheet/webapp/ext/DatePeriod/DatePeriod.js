sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function(Filter, FilterOperator) {
	"use strict";

	return {
		//Search-Term: "customFilter"
		onReset: function(oEvent) {
			this.setFilterValues("starsValue");
		},

        onChangeDate: function(oEvent) {
            debugger;
			return new Filter({ path: "EndDate", operator: FilterOperator.LT, value1: '20231201' });
        }
	};
});
