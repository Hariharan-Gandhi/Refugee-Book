jQuery.sap.declare("Refugee_Book.util.messages");
jQuery.sap.require("sap.ca.ui.message.message");

Refugee_Book.util.messages = {};

/**
 * Show an error dialog with information from the oData response object.
 *
 * @param {object}
 *            oParameter The object containing error information
 * @return {void}
 * @public
 */
Refugee_Book.util.messages.showErrorMessage = function(oParameter) {
	var oErrorDetails = Refugee_Book.util.messages._parseError(oParameter);
	var oMsgBox = sap.ca.ui.message.showMessageBox({
		type: sap.ca.ui.message.Type.ERROR,
		message: oErrorDetails.sMessage,
		details: oErrorDetails.sDetails
	});
	if (!sap.ui.Device.support.touch) {
		oMsgBox.addStyleClass("sapUiSizeCompact");
	}
};

Refugee_Book.util.messages.getErrorContent = function(oParameter) {
	return Refugee_Book.util.messages._parseError(oParameter).sMessage;
};

Refugee_Book.util.messages._parseError = function(oParameter) {
	var sMessage = "",
		sDetails = "",
		oEvent = null,
		oResponse = null,
		oError = {};

	if (oParameter.mParameters) {
		oEvent = oParameter;
		sMessage = oEvent.getParameter("message");
		sDetails = oEvent.getParameter("responseText");
	} else {
		oResponse = oParameter;
		sMessage = oResponse.message;
		sDetails = oResponse.response.body;
	}

	if (jQuery.sap.startsWith(sDetails, "{\"error\":")) {
		var oErrModel = new sap.ui.model.json.JSONModel();
		oErrModel.setJSON(sDetails);
		sMessage = oErrModel.getProperty("/error/message/value");
	}

	oError.sDetails = sDetails;
	oError.sMessage = sMessage;
	return oError;
};