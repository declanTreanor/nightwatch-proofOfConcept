exports.command = function() {
    
    this.expect.element('body').to.be.present.before(1000);


    // expect element  to have attribute 'class' which contains text 'vasq'
    this.expect.element('body').to.have.attribute('class').which.contains('AVA');
    
    


    return this;
};



