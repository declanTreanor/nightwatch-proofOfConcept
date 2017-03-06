module.exports = {
  '@tags' : ['endToEnd'],
  'Test: (end-to-end) 27333 - Schweringen - Holtrup - Test' : function (client) {
     client.requestPowerInArea('27333', 'Schweringen', 'Holtrup');
     client.selectBuildingType('constructionPower');
     client.selectConnectionType('constructionPower');
     client.inputAddressWizard('Fake Street');
     client.inputInstallationDates('01.04.2017', '01.05.2017');
     client.uploadFloorplan('/home/declan/floorplan.jpg');
     client.kostenaufstellung();
     client.enterFurtherQuestionsText('bla bla bla bla');
     client.insertReceiptAddressInfo('Dec', 'Treanor', 'asdadasd', 'fdsdfsdf', 'asdasdasd', '12345679', 'dec@tre.com');
     client.insertPlumberInfo('plumberCompanyName', 'plumberStreet', 'plumberPostalCode', 'plumberCity', 'plumberTelephone', 'plumberEmail@plumberEmail.com');
     client.completeOrder();
     //client.assertOrder();
     //client.openSummaryPdf();
     
     

//      client.end();
  }
};
