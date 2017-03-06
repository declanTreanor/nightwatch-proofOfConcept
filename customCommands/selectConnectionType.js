exports.command = function(baustromType) {

    this.globals.waitVisibleThenClick(this.page.chooseConnectionType(), '@next');
    return this;
};
