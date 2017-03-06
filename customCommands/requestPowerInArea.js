exports.command = function(postcode, city, district) {
    
    var homePage = this.page.homePage();
    homePage.navigate();
    
    this.globals.waitThenSetValue(homePage, '@enterPostcode', postcode);
    this.globals.selectOption(homePage, '@selectCity', city);
    this.globals.selectOption(homePage, '@selectDistrict', district).click('@submit');

    return this;
    
};
