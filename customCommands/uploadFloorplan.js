exports.command = function(floorplanUrl) {

    this.pause(1000);
    this.globals.uploadFile(this.page.orderWizard(),'@uploadFile', floorplanUrl).click('@defaultSubmit');
    
    return this;
};
