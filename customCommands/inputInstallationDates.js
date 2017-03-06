exports.command = function(fromDate, toDate) {
    
    this.globals.waitThenSetValue(this.page.orderWizard(), '@earliestStartDate', fromDate).setValue('@lastDueDate', toDate).click('@datesSubmit');

    return this;
};
