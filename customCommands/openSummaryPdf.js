exports.command = function() {
    
    var confirmationPage = this.page.confirmationPage();
    
    this.pause(5000);
    
    this.globals.waitVisibleThenClick(confirmationPage, '@pdfLink');

    return this;
};
