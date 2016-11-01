// Runs Nightwatch for End to End testing
function runNightwatch() {
  var opts = process.argv.slice(2)
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/support/nightwatch.conf.js'])
  }
  var spawn = require('cross-spawn')
  //var spawn = require('child_process').spawn;
  var nw = spawn('./node_modules/.bin/nightwatch', opts);
  nw.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  });
  nw.stderr.on('data', (data) => {
  console.log(`stdout: ${data}`);
  });
}

runNightwatch();
