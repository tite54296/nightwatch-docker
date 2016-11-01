/**
 * Created by katherine on 9/20/16.
 */
function registerAccount(page){
  page.navigate(page.url('12345678'))
    .typeAccount('12345678')
    .submit('submit')
    .typePassword("A234328479834")
    .selectSecurityQuestions()
    .typeSecurityAnswer('valid')
}

var COMMON_METHODS = require('../../support/common-methods.js');

module.exports = function() {

  var myAccount = null;
  
  // Background - My account preconditions
  
  this.Given(/^I have registered my account$/,function() {
    var accountActivation = this.page.accountActivation();
    registerAccount(accountActivation);
  });
  
  this.Given(/^I access My account page$/,function() {
    myAccount = this.page.myAccount();
    myAccount.navigate(myAccount.url());
  });

  this.When(/^I click on "(Change password|show current password|hide current password|show new password|hide new password)"$/,function(cta) {
    myAccount.submit(cta);
  });
  
  this.Then(/^I should be taken to "(Change password)" page$/,function(page) {
    myAccount
      .waitForElementVisible('body', 2000)
      .assert.titleContains(page);
  });

  this.Given(/^I am on "(Change password)" page$/, function(cta){
    myAccount
      .navigate(myAccount.url())
      .submit(cta);
  });

  this.When(/^I .* a valid (current password|new password)/, function(field) {
    field = '#'+field.replace(' ','-');
    myAccount
      .typePassword('A234328479834',field)
  });

  this.Then(/^(current password|new password) should not show encoded$/, function (field) {
    field = '#'+field.replace(' ','-');
    myAccount.assert.attributeEquals(field,'type','text');
  });

  this.Given(/^my (current password|new password) is being shown$/, function(field) {
    myAccount.submit('show '+field)
  });

  this.Then(/^(current password|new password) should be shown as dots$/, function (field) {
    field = '#'+field.replace(' ','-');
    myAccount.assert.attributeEquals(field,'type','password');
  });

}