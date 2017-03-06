exports.command = function(streetAddress) {
    
    this.pause(1000);
    this.globals.waitThenSetValue(this.page.orderWizard(), '@addressStreet', streetAddress).click('@addressSubmit');

    return this;
};
    
