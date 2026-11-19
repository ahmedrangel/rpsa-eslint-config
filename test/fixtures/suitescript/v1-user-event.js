function beforeSubmit(type) {
  var rec = nlapiGetNewRecord();
  nlapiLogExecution("DEBUG", "beforeSubmit", rec.getId());
}
