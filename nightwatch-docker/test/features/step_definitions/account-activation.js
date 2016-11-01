// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

var ALIAS = {
  'ACCOUNT_TEXT_BOX': '@accountTextBox',
  'SUBMIT_BUTTON': '@submitButton',
  'TOKEN' : '@token',
  'HEADING':'@heading'
}

var COMMON_METHODS = require('../../support/common-methods.js');
var environment = COMMON_METHODS.getEnvironment();

var TEST_DATA = require('../../resources/data/test-data.js')[environment];
var ENV_DATA = require('../../resources/data/environment-data.js')[environment];
var APP_DATA = require('../../resources/data/app-data.js');

module.exports = function() {

  var accountActivation = null;

  // Background - My account preconditions
  
  this.Given(/^I have accessed the environment$/,function() {
    accountActivation = this.page.accountActivation();
    if ( environment == 'staging'){
      username = ENV_DATA.credentials.username;
      password = ENV_DATA.credentials.password;
      url = accountActivation.url().replace('https://','https://'+username+':'+password+'@');
      accountActivation
        .navigate()
        .api.deleteCookies();
    }
  });

  // First Step - Account Number

  this.Given(/^account activation page is accessed with a "([^"]*)"$/, function(token) {
    accountActivation.navigate(accountActivation.url(TEST_DATA.TOKENS[token]))
  });

  this.Then(/^the "([^"]*)" message should be shown$/, function(error) {
    accountActivation
      .waitForElementPresent('@errorBox', 2000)
      .assert.containsText('@errorBox', APP_DATA.ERROR_MESSAGES[error]);
  });

  this.When(/^I enter a valid account number$/, function() {
    accountActivation.typeAccount(TEST_DATA.ACCOUNTS['valid account']);
  });

  this.When(/^I click on "(submit|Register my account|Show|Hide|TELUS Privacy Terms & Conditions|Take me to My Account)"$/, function(button) {
    accountActivation.api.pause(2000);
    accountActivation.submit(button);
  });

  this.Then(/^I am taken to "(STEP 2|STEP 3|My Account)" page$/, function(page) {
    accountActivation
      .waitForElementVisible('h1', 2000)
      .assert.containsText(ALIAS.HEADING,APP_DATA.HEADINGS[page]);
  });

  this.Then(/^I am taken to "(About TELUS)" page$/, function(page) {
    COMMON_METHODS.switchToTab(accountActivation.api,1,function(window){
      window
        .waitForElementVisible('body', 2000)
        .assert.titleContains(page);
    })
    accountActivation.api.closeWindow();
    COMMON_METHODS.switchToTab(accountActivation.api,0,function(window){
      window.waitForElementVisible('body', 2000);
    });
  });
  
  // Second Step - Password & Security answer

  this.Given(/^I have confirmed my account number$/, function() {
    accountActivation
      .navigate(accountActivation.url(TEST_DATA.TOKENS['valid token']))
      .api.pause(2000);
    accountActivation
      .typeAccount(TEST_DATA.ACCOUNTS['valid account'])
      .submit('submit')
  });

  this.When(/^I .* a valid password$/, function() {
    accountActivation
      .typePassword("Ab234328479834")
  });

  this.When(/^I .* a security question$/, function() {
    accountActivation
      .selectSecurityQuestions()
  });

  this.When(/^I .* ([^"]*) answer$/, function(answerType) {
    accountActivation
      .typeSecurityAnswer(answerType)
  });

  this.Given(/^I am on "(STEP 3)" page$/, function(page){
    url = accountActivation.api.launchUrl+APP_DATA.URLS[page];
    COMMON_METHODS.loginCI(this);
    accountActivation.navigate(url)
  });

  this.When(/^I enter a password that does not fulfill "([^"]*)"$/, function(requirements) {
    password = TEST_DATA.PASSWORDS[requirements];
    accountActivation.setInvalidPassword(password);
  });

  this.Then(/^I should see an X error icon before description "([^"]*)"$/, function(requirements){
    accountActivation.getBulletStyle(function(className) {
      COMMON_METHODS.compareArrays(APP_DATA.PASSWORD_BULLET_CLASSES[requirements],className);
    });
  });

  this.Then(/^password should not show encoded$/, function () {
    accountActivation.assert.attributeEquals('#password','type','text');
  });

  this.Given(/^my password is being shown$/, function() {
    accountActivation.submit('Show')
  });

  this.Then(/^password should be shown as dots$/, function () {
    accountActivation.assert.attributeEquals('#password','type','password');
  });

  this.Then(/^An error for "([^"]*)" should be shown to the user$/, function (error) {
    switch (error){
      case 'invalid answer':
        accountActivation.assert.elementPresent('#answer-error-notice');
        break;
      case 'invalid password':
        accountActivation.assert.elementPresent('#password-error-notice');
        break;
    }

  });

}
