module.exports = {
  HEADINGS: {
    'STEP 1': 'Let\'s activate your account!',
    'STEP 2': 'Secure your account.',
    'STEP 3': 'Success.',
    'My Account': 'Welcome to My Account',
  },
  URLS: {
    'STEP 3': '#!/registration/success',
    'CI login':'https://telusidentity.telus.com/as/authorization.oauth2?client_id=telusselfserve_telusbusiness_2599&redirect_uri=https://www.telus.com/business/myaccount-api/account/oauth/callback&response_type=code&scope=priceplaninfo%20securitymgmt%20usagedetails%20profilemanagement%20invoiceinfo%20usagemanagement%20accountactivity%20subscriberinfo%20paymentmanagement%20paymentprocessing%20accountinfo%20devicemanagement%20serviceeligibility%20loyaltyandrewards%20recommendationmanagement%20profileinfohighdetail%20usagepreferencemanagement%20usagemeter%20usagenotificationacceptancehistory%20usageblockmanagement%20tvrequisition%20tvsusbscriptioninfo%20internetservicemanagement%20customerinfo'
  },
  PASSWORD_BULLET_CLASSES: {
    'Is at least 8 characters with no spaces': ['fail','pass','pass'],
    'Is not common or obvious' : ['pass','pass','fail'],
    'Has at least 1 number and 1 uppercase letter' : ['pass','fail','pass'],
    'Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter' : ['fail','fail','pass'],
    'Is at least 8 characters with no spaces & Is not common or obvious' : ['fail','pass','fail'],
    'Has at least 1 number and 1 uppercase letter & Is not common or obvious' : ['pass','fail','fail'],
    'Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter & Is not common or obvious' : ['fail','fail','fail']
  },
  ERROR_MESSAGES: {
    'global error':'Oops... Something went wrong. You will need to come back another time to register for My Account. In the meantime return to TELUS.com'
  }
}