exports.command = function() {
    
    this.globals.waitPresentThenClick(this.page.orderWizard(), '@confirmPermission').click('@confirmDataProtection').click('@defaultSubmit');

    return this;
};
