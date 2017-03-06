module.exports = {
  url: 'https://qa-meinhausanschluss.avacon.de/confirmation',
  elements: {
    
    defaultSubmit: 'button[data-qa=next-button]',
        
    pdfLink: { 
      selector: '//a[contains(@href,"summary")]', 
      locateStrategy: 'xpath' 
    }

  }
};
