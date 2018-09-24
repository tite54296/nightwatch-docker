/**
 * Created by katherine on 8/18/16.
 */
var util = require('util');

exports.assertion = function(containedString) {
  var DEFAULT_MSG = 'Testing if title contains "%s".';
  this.message = util.format(DEFAULT_MSG, containedString);
  this.expected = true;

  this.pass = function(value) {
    return value
  };

  this.failure = function(result) {
    var failed = result === false;
    if (failed){
      this.message = 'Title does not include specified text'
    }
    return failed
  }

  this.value = function(result) {
    return result
  };

  this.command = function(callback) {
    var self = this;
    return this.api.getTitle(function(result) {
      result = result.includes(containedString) === self.expected;
      callback.call(self,result);
    })
  };
}
