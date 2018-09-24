/**
 * Created by katherine on 9/16/16.
 */


var util = require('util');


var APP_DATA = require('../../resources/data/app-data.js');

function compareArrays(array1, array2) {
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
}

exports.assertion = function(requirements,classes) {
  var DEFAULT_MSG = 'Testing if "%s" are being marked as not fulfilled.';
  
  this.message = util.format(DEFAULT_MSG, requirements);
  
  this.expected = true;

  this.pass = function(value) {
    return value
  };

  this.failure = function(result) {
    var failed = result === false;
    if (failed){
      this.message = 'Styles are not correctly set up.'
    }
    return failed
  }

  this.value = function(result) {
    console.log("this is result" +result);
    return result
  };

  this.command = function(callback) {
    return compareArrays(APP_DATA.PASSWORD_BULLET_CLASSES[requirements],classes);
  };
}
