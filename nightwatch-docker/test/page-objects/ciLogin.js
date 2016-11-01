var ALIAS = {
  'EMAIL':'@email',
  'PASSWORD':'@password',
  'LOGIN':'@cta'
}

var objectCommands = {
  typeEmail: function(email) {
    this
      .waitForElementVisible(ALIAS.EMAIL, 2000)
      .setValue(ALIAS.EMAIL,email)
    return this;
  },
  typePassword: function(password) {
    this
      .waitForElementVisible(ALIAS.PASSWORD, 2000)
      .setValue(ALIAS.PASSWORD,password)
    return this;
  },
  clickLogin: function() {
  	this
      .waitForElementVisible(ALIAS.LOGIN, 2000)
      .click(ALIAS.LOGIN)
  }
}

module.exports = {
  url: function() {
  	url = require('../resources/data/app-data.js').URLS['CI login'];
  	return url;
  },
  commands:[objectCommands],
  elements : {
  	email:{
  	  selector:'input[name="IDToken1"]'
  	},
  	password:{
  	  selector:'#IDToken2'
  	},
  	cta: {
  	  selector:'#standardLogin'
  	}
  }
}