module.exports = {
  url: 'https://dev-meinhausanschluss.avacon.de/order',
  elements: {
    addressStreet: 'input[name=street]',
    addressZip: 'input[name=zip]',
    addressCity: 'input[name=city]',
    addressDistrict: 'input[name=district]',
    addressSubmit: 'button[data-qa=addressButton]',
    earliestStartDate: 'input[name=constructionPowerFrom]',
    lastDueDate: 'input[name=constructionPowerTo]',
    datesSubmit: 'button[data-qa=next-button]',
    
    defaultSubmit: 'button[data-qa=next-button]',
        
    furtherQuestions: { 
      selector: '//textarea[@placeholder="Bitte geben Sie hier Ihren Text ein"]', 
      locateStrategy: 'xpath' 
    },
    
    uploadFile: 'input[type="file"]',
    
    confirmPermission: 'label[data-qa="permission"]',
    confirmDataProtection: 'label[data-qa="dataProtection"]'
  }
};
