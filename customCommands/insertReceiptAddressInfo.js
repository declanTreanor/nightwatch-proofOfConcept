exports.command = function(firstName,lastName, street, postalCode,city, telephone, email) {
    
    var plumberInfo = this.page.plumberInfo();
    this.globals.waitThenSetValue(plumberInfo, '@firstName', 1000).setValue('@firstName', firstName)
    .setValue('@lastName', lastName).setValue('@street', street).setValue('@postalCode', postalCode)
    .setValue('@city', city).setValue('@telephone', telephone).setValue('@email', email).setValue('@emailConfirm', email)
    .click('@consentData');

    return this;
};


    
    
