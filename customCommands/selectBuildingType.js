exports.command = function(buildingType) {
    
    this.globals.waitVisibleThenClick(this.page.buildingTypePage(), '@submit'+buildingType);
    
    return this;
};
