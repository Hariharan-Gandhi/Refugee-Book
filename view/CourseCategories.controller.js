sap.ui.controller("Refugee_Book.view.CourseCategories", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf Refugee_Book.view.CourseCategories
	 */

	onInit: function() {
		var model = new sap.ui.model.json.JSONModel();
		model.loadData("./categoryList.json", false);
		this.getView().setModel(model);
	},

	onSearch: function(oEvt) {

		// add filter for search
		var aFilters = [];
		var sQuery = oEvt.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}

		// update list binding
		var list = this.getView().byId("idList");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

	onNavBack: function() {
		window.history.go(-1);
	},

	onCourseClick: function(oevent) {
		var choosenCategory = oevent.getSource().getBindingContext().getObject().id;
		sap.ui.core.UIComponent.getRouterFor(this).navTo("CoursePage", {categoryId: choosenCategory});
	}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf Refugee_Book.view.CourseCategories
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf Refugee_Book.view.CourseCategories
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf Refugee_Book.view.CourseCategories
	 */
	//	onExit: function() {
	//
	//	}

});