sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('com.ordinats.ui.managetimesheet.ext.controller.ListReportExtension', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf com.fe.demo.manageinquiries.ext.controller.ListReportExtension
             */
			onInit: function () {
				// Reference Model
				// var oModel = this.base.getExtensionAPI().getModel();
			},

            onAfterRendering: function () {
                // Table Reference
                // let sId = "com.ordinats.ui.managetimesheet::EmployeeDataList--fe::table::belgium::LineItem::Table";
                // var oTable = this.base.getExtensionAPI().byId(sId);
				let valueHelp = this.getView().byId("com.ordinats.ui.managetimesheet::EmployeeDataList--fe::FilterBar::EmployeeData::FilterFieldValueHelp::PersonnelNumber");
				valueHelp.attachOpen((event) => { debugger; });
            }
		}
	});
});
