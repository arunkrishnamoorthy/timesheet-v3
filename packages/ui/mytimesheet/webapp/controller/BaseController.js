sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment", "sap/ui/Device", "sap/ui/model/json/JSONModel"],
    function (Controller, Fragment, Device, JSONModel) {
      "use strict";
  
      return Controller.extend("com.ordinats.ui.mytimesheet.controller.BaseController", {
        /**
         * Convenience method for retrieving a translatable text.
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         * @param {string} sTextId - the ID of the text to be retrieved.
         * @param {Array} [aArgs] - optional array of texts for placeholders.
         * @returns {string} the text belonging to the given ID.
         */
        _getText: function (sTextId, aArgs) {
          return this.getOwnerComponent()
            .getModel("i18n")
            .getResourceBundle()
            .getText(sTextId, aArgs);
        },
  
        /**
         * Register message manager specific to the view
         * @private 
         * @memberof com.ordinats.ui.mytimesheet.controller.BaseController
         */
        _fnRegisterMessageManager: function () {
          sap.ui
            .getCore()
            .getMessageManager()
            .registerObject(this.getView(), true);
          var oMessagesModel = sap.ui
            .getCore()
            .getMessageManager()
            .getMessageModel();
          this.getView().setModel(oMessagesModel, "message");
        },
  
        /**
         * Return the instance of the OData Model
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         * @param {*} sModelName
         * @override
         * @returns
         */
        getModel: function (sModelName) {
          return sModelName
            ? this.getView().getModel(sModelName)
            : this.getView().getModel();
        },
  
        /**
         * Attach model to the view 
         * @param {sap.ui.model} oModel - Attach oData Model or JSON model
         * @param {string} sModelName - Name of the model
         * @override
         */
        setModel: function(oModel,sModelName){
          sModelName ? this.getView().setModel(oModel,sModelName) : this.getView().setModel(oModel);
        },
  
        /**
         * Getter for the resource bundle.
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         * @public
         * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
         */
        getResourceBundle: function () {
          return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
  
        /**
         * Returns the reference of the router.
         * @private
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         * @returns {sap.ui.core.routing.Router} the router for this component
         */
        getRouter: function () {
          return sap.ui.core.UIComponent.getRouterFor(this);
        },
  
        /**
         * Short handle for getting ID's of the control
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         * @param {String} sId - ID of the control
         * @public
         * @override
         * @returns {sap.ui.core.Control} reference of the control
         */
        byId: function (sId) {
          return this.getView().byId(sId);
        },
  
        /**
         * Returns the promise to instantiate the Dialog fragment for Technical or Non Technical Tour type
         * @private
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         * @returns {sap.m.Dialog} oDialog - Dialog reference for the given fragment
         */
        getDialog: function (sDialogName) {
          var oDialog = this._mViewDialog[sDialogName];
          if (!oDialog) {
            oDialog = Fragment.load({
              id: this.getView().getId(),
              name: "com.ordinats.ui.mytimesheet.fragments." + sDialogName,
              controller: this,
            }).then((oDialog) => {
              this._mViewDialog[sDialogName] = oDialog;
              this.getView().addDependent(oDialog);
              if (Device.system.desktop) {
                oDialog.addStyleClass("sapUiSizeCompact");
              }
              return oDialog;
            });
          }
          return oDialog;
        },
  
        /**
         * Register model for View management data
         */
        _intializeViewModel: function(){
          var oViewData = {
                      busy : false
                  },
                  oViewModel = new JSONModel(oViewData);
          this.getView().setModel(oViewModel,"view"); // View specific data
        },
  
        /**
         * Mark the view as busy 
         * @private
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         */
        setBusy: function(){
          this.getView().getModel("view").setProperty("/busy",true);
        },
        /**
         * Mark view as not busy
         * @private
         * @memberOf com.ordinats.ui.mytimesheet.controller.BaseController
         */
        setNotBusy: function(){
          this.getView().getModel("view").setProperty("/busy",false);
        }
        
      });
    }
  );
  