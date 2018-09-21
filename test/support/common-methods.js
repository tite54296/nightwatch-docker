module.exports = {
  switchToTab: function(browser,tab,callback) {
    browser.windowHandles(function(windows){
      var newWindow = windows.value[tab];
      this.switchWindow(newWindow);
      return callback(this);
    })
  },

  getEnvironment: function() {
  	var args = process.argv;
  	index = args.indexOf('--env')
  	return index != -1 ? args[index +1]:'default'
  },

  compareArrays: function (array1, array2) {
    if (array1.length != array2.length){
      return false;
    } 
    else {
      var i = 0;
      var length = array1.length;
      while (array1[i] == array2[i] && i < length){
        i++;
      }
      return i < length-1 ? false:true;
    }
  },

  loginCI: function (browser){
    ci = browser.page().ciLogin();
    ci
      .navigate()
      .typeEmail('huge-santiago-056@telusinternal.com')
      .typePassword('wordPass1234')
      .login();
    /*browser
      .navigate('https://telusidentity.telus.com/as/authorization.oauth2?client_id=telusselfserve_telusbusiness_2599&redirect_uri=https://www.telus.com/business/myaccount-api/account/oauth/callback&response_type=code&scope=priceplaninfo%20securitymgmt%20usagedetails%20profilemanagement%20invoiceinfo%20usagemanagement%20accountactivity%20subscriberinfo%20paymentmanagement%20paymentprocessing%20accountinfo%20devicemanagement%20serviceeligibility%20loyaltyandrewards%20recommendationmanagement%20profileinfohighdetail%20usagepreferencemanagement%20usagemeter%20usagenotificationacceptancehistory%20usageblockmanagement%20tvrequisition%20tvsusbscriptioninfo%20internetservicemanagement%20customerinfo')
      .setValue('input[name="IDToken1"]','huge-santiago-056@telusinternal.com')
      .setValue('input[id="IDToken2"]','wordPass1234')
      .click('#standardLogin')*/
  }
}