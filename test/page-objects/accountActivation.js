/**
 * Created by katherine on 8/18/16.
 */
var ALIAS = {
  'ACCOUNT_TEXT_BOX' : '@accountTextBox',
  'TOKEN' : '@token',
  'PASSWORD': '@password',
  'SECURITY_QUESTION': '@securityQuestion',
  'SECURITY_ANSWER': '@securityAnswer',
  'HEADING':'@heading',
  'BULLETS':'@bullets'
}

var BUTTONS = {
  'submit' : '@submitButton',
  'Register my account': '@registerMyAccount',
  'Take me to My Account' : '@myAccountCTA',
  'Show' : '@showLink',
  'Hide' : '@showLink',
  'TELUS Privacy Terms & Conditions' : '@privacyTermsLink'
}

function getBulletElements(page, callback) {
  page.elements('css selector','span svg',function (bullets){
    bullets = bullets.value;
    return callback(bullets);
  });
}

function getElementAttribute(page, element, attribute, callback){
  page.elementIdAttribute(element, attribute, function(classObject){
    return callback(classObject.value);
  })
}

function getElementsStyle(page, elementList, callback) {
  var length = elementList.length
  var elementClasses = [];
  for (var i=0; i< length; i++){
    getElementAttribute(page, elementList[i].ELEMENT, 'class', function(attribute){
      elementClasses.push(attribute);
      if (elementClasses.length == length) {
        return callback(elementClasses);
      }
    })
  }
}

var objectCommands = {
  typeAccount: function(account) {
    this
      .waitForElementVisible(ALIAS.ACCOUNT_TEXT_BOX, 2000)
      .setValue(ALIAS.ACCOUNT_TEXT_BOX, account)
    return this;
  },

  selectSecurityQuestions: function() {
    this
      .waitForElementVisible(ALIAS.SECURITY_QUESTION,2000)
      .setValue(ALIAS.SECURITY_QUESTION,'City of your first job?')
    return this;
  },

  typePassword: function(password) {
    this
      .waitForElementVisible(ALIAS.PASSWORD, 2000)
      .setValue(ALIAS.PASSWORD, password)
    return this;
  },

  setInvalidPassword: function(password) {
    this
      .waitForElementVisible(ALIAS.PASSWORD, 2000)
      .typePassword(password)
      .waitForElementVisible('@showLink',2000)
      .click('@showLink')
      .waitForElementNotPresent('span[class="list-icon dimmed"]',3000)
  },

  getBulletStyle: function (callback) {
    var browser = this.api;
    getBulletElements(browser, function (bullets){
      getElementsStyle(browser,bullets, function(classes){
        return callback(classes);
      })
    })

  },

  typeSecurityAnswer: function(answerType) {
    var answer = answerType == 'valid' ? 'Germany':'Ger';

    this
      .waitForElementVisible(ALIAS.SECURITY_ANSWER, 2000)
      .setValue(ALIAS.SECURITY_ANSWER, answer)
    return this;
  },

  submit: function(button) {
    button = BUTTONS[button];
    this
      .waitForElementVisible(button,2000)
      .click(button);
    return this;
  }
};

module.exports = {
  url: function(token) {
    var tokenMissing = token === undefined || token == '';
    url = this.api.launchUrl+'#!/registration/activate';
    return  tokenMissing ? url : url +'?token='+ token;
  },
  commands:[objectCommands],
  elements : {
    heading:{
      selector: 'h1'
    },
    accountTextBox: {
      selector: '#account-number-field'
    },
    token: {
      selector: '#token'
    },
    submitButton: {
      selector: '#account-number--submit'
    },
    password:{
      selector:'#password'
    },
    securityQuestion:{
      selector:'#security-question'
    },
    securityAnswer:{
      selector:'#security-answer'
    },
    registerMyAccount:{
      selector:'#submit'
    },
    myAccountCTA:{
      selector:'a[href="/my-account.html"]'
    },
    showLink:{
      selector:'#toggler'
    },
    privacyTermsLink:{
      selector:'a[href*="privacy"]'
    },
    errorBox:{
      selector:'.message-box__text'
    }
  }
}
