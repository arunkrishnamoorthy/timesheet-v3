sap.ui.define([
  "com/ordinats/ui/mytimesheet/controller/BaseController",
  "sap/ui/model/json/JSONModel"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController,JSONModel) {
      "use strict";

      return BaseController.extend("com.ordinats.ui.mytimesheet.controller.App", {
          
          onInit: function () {
            this._intializeViewModel();
            this.getView().getModel("view").setProperty("/sideNavigation",true);
            let model = new JSONModel();
                model.setData({
                    "date" : new Date()
                });
                this.getView().setModel(model,"dateinput");
          },

          handleToggle: function() {
            let toggle = this.getView().getModel("view").getData().sideNavigation;
            this.getView().getModel("view").setProperty("/sideNavigation",!toggle);
          },

          handleOpenDatePicker: function(oEvent) {
            this.getView().byId("idHiddenDate").openBy(oEvent.getSource().getDomRef());
          }
      });
  });
