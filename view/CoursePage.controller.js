sap.ui.controller("Refugee_Book.view.CoursePage", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf Refugee_Book.view.CoursePage
	 */
	onInit: function(oevent) {
	
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("CoursePage").attachPatternMatched(this._onObjectMatched, this);


	},
	_onObjectMatched: function (oEvent) {
		var id = oEvent.getParameter("arguments").categoryId;
		
		var model = new sap.ui.model.json.JSONModel();
		model.loadData("./Courses/Courses?category=" + id, false);
		this.getView().setModel(model);
		
		// this.getView().bindElement({
		// 	path: "/elements/" + oEvent.getParameter("arguments").categoryId,
		// });
	},
	specificCourse: function() {
		
		sap.ui.core.UIComponent.getRouterFor(this).navTo("CourseDetails");
	},

	
	onNavBack: function() {
		window.history.go(-1);
	}

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf Refugee_Book.view.CoursePage
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf Refugee_Book.view.CoursePage
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf Refugee_Book.view.CoursePage
	 */
	//	onExit: function() {
	//
	//	}

});