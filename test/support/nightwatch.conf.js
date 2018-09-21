var nightwatchCucumber = require('nightwatch-cucumber')({
  runner: 'nightwatch',
  supportFiles: ['test/support/hooks.js'],
  featureFiles: ['features'],
  stepDefinitions: ['features/step_definitions'],
  closeSession: 'afterFeature',
  htmlReport: 'reports/index.html',
  openReport: false,
})


module.exports = {
  "src_folders": [nightwatchCucumber],
  "globals_path": 'support/global.js',
  "output_folder": "reports",
  "custom_assertions_path": ["support/custom-assertions"],
  "page_objects_path" : "page-objects",

  "test_settings": {
    "default": {
      "launch_url":"http://biz.telus.local",
      "selenium_port": 4444,
      "selenium_host": "hub",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : false,
        "path" : "reports/failure-screenshots",
      }
    },

    "staging":{
      "launch_url":"https://www.wcstage.telus.com/business/myaccount/"
    },

    "production":{
      "launch_url":"https://www.telus.com/business/myaccount/"
    },

    "android": {
      "selenium_port": 4723,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "platformName": "ANDROID",
        "deviceName": "CB51249FHF",
        "version": "",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}
