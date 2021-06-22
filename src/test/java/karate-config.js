function fn() {
  var env = karate.env; // get system property 'karate.env'
//  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
  var driverconfig = { type: 'chrome', executable: "C:/Program Files/Google/Chrome/Application/chrome.exe",stop: true }
  karate.configure('driver',driverconfig);
  return config;
}