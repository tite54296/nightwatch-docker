var myHooks = function () {
  // Synchronous
  this.Before(function (scenario) {
    this.deleteCookies();
  });

  // Asynchronous Promise
  this.After(function (scenario) {
    console.log("holaaaa");
    return this.end();
  });
};

module.exports = myHooks;