var nightwatchCucumber = require('nightwatch-cucumber')({
  runner: 'nightwatch',
  supportFiles: ['test/support/hooks.js'],
  featureFiles: ['test/features'],
  stepDefinitions: ['test/features/step_definitions'],
  htmlReport: 'test/reports/index.html',
  openReport: false,
})


module.exports = {
  "src_folders": [nightwatchCucumber],
  "output_folder": "test/reports",
  "custom_assertions_path": ["test/support/custom-assertions"],
  "page_objects_path" : "test/page-objects",

  "test_settings": {
    "default": {
      "launch_url":"http://biz.telus.local",
      "selenium": {
        "start_process": true,
        "server_path": "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
          "webdriver.chrome.driver": require('chromedriver').path
        }
      },
      "selenium_port": 4444,
      "selenium_host": "hub",
      "selenium_host": "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "skip_testcases_on_fail": false,
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : false,
        "path" : "test/e2e/reports/failure-screenshots",
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
