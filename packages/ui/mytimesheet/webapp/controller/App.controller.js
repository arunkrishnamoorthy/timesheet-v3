sap.ui.define([
  "com/ordinats/ui/mytimesheet/controller/BaseController"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController) {
      "use strict";

      return BaseController.extend("com.ordinats.ui.mytimesheet.controller.App", {
          
          onInit: function () {
            this._intializeViewModel();
            this.getView().getModel("view").setProperty("/sideNavigation",true);
          },

          handleToggle: function() {
            let toggle = this.getView().getModel("view").getData().sideNavigation;
            this.getView().getModel("view").setProperty("/sideNavigation",!toggle);
          }
      });
  });
