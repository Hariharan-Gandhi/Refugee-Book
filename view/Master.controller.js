jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
jQuery.sap.require("sap.m.TablePersoController");

sap.ui.core.mvc.Controller.extend("Refugee_Book.view.Master", {
	_oCatalog: null,
	_oResourceBundle: null,

	onInit: function() {

	},

	main_page_nav: function(oevent) {

		var choosenFeature = oevent.getSource().getId();

		switch (choosenFeature) {
			case this.getView().createId("myprofile"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("MyProfile");
				break;
			case this.getView().createId("courses"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("CourseCategories"); //CoursePage		
				break;
			case this.getView().createId("jobmarket"):
				sap.ui.core.UIComponent.getRouterFor(this).navTo("JobPage");
				break;
			default:
				sap.ui.core.UIComponent.getRouterFor(this).navTo("CoursePage");

		}

		//sap.ui.core.UIComponent.getRouterFor(this).navTo("OverallView");
	},

	onNavBack: function() {
		window.history.go(-1);
	}
});