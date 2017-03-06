exports.command = function() {
    
    this.pause(1000);
    var orderWizard = this.page.orderWizard();
    this.globals.waitVisibleThenClick(this.page.orderWizard(), '@defaultSubmit');
    orderWizard.click('@defaultSubmit');

    return this;
};
