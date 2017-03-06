module.exports = {
  url: 'https://dev-meinhausanschluss.avacon.de/order',
  elements: {
    firstName: 'input[name=firstName]',
    lastName: 'input[name=lastName]',
    street: 'input[name=street]',
    postalCode: 'input[name=postalCode]',
    city: 'input[name=city]',
    telephone: 'input[name=telephone]',
    email: 'input[name=email]',
    emailConfirm: 'input[name=emailConfirm]',
    consentData: 'label[data-qa="billing-address-checkbox"]',
    plumberCompanyName: 'input[name=plumberCompanyName]',
    plumberStreet: 'input[name=plumberStreet]',
    plumberPostalCode: 'input[name=plumberPostalCode]',
    plumberCity: 'input[name=plumberCity]',
    plumberTelephone: 'input[name=plumberTelephone]',
    plumberEmail: 'input[name=plumberEmail]',
    confirmationToPlumber: 'label[data-qa="billing-address-checkbox-confirmation-to-plumber"]',
    plumberSubmit: 'button[data-qa=billing-address-next-button]'
    
  }
};


