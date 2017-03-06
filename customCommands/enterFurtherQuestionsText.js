exports.command = function(text) {
    
    this.pause(1000);
    this.globals.waitThenFillTextArea(this.page.orderWizard(), '@furtherQuestions', text).click('@defaultSubmit');
    return this;
};
