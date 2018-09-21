/**
 * Created by katherine on 9/15/16.
 */
var BUTTONS = {
  'Change password' : '@changePasswordLink',
  'show current password' : '@showCurrent',
  'hide current password' : '@showCurrent',
  'show new password' : '@showNew',
  'hide new password' : '@showNew',
}

var objectCommands = {
  submit: function(cta) {
    cta = BUTTONS[cta];
    this
      .waitForElementVisible(cta,2000)
      .click(cta);
  },
  typePassword: function(password,field) {
    this
      .waitForElementVisible(field, 2000)
      .setValue(field, password)
    return this;
  },
};

module.exports = {
  url: function() {
    return  this.api.launchUrl + "/my-account.html";
  },
  commands:[objectCommands],
  elements: {
    heading: {
      selector:'h1'
    },
    myBillingCTA: {
      selector:'a[href *= "billing"]'
    },
    changePasswordLink: {
      selector: 'a[href *="change-password"]'
    },
    showCurrent:{
      selector:'button[data-field="current-password"] span[id="toggler"]'
    },
    showNew:{
      selector:'button[data-field="new-password"] span[id="toggler"]'
    }
  }
}
