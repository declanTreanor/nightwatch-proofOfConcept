exports.command = function(plumberCompanyName,plumberStreet, plumberPostalCode, plumberCity,plumberTelephone, plumberEmail) {
    
    var plumberInfo = this.page.plumberInfo();
    
     this.globals.waitThenSetValue(plumberInfo, '@plumberCompanyName', plumberCompanyName)
    .setValue('@plumberStreet', plumberStreet).setValue('@plumberPostalCode', plumberPostalCode)
    .setValue('@plumberCity', plumberCity).setValue('@plumberTelephone', plumberTelephone)
    .setValue('@plumberEmail', plumberEmail).click('@confirmationToPlumber').click('@plumberSubmit');
    

    return this;
};


