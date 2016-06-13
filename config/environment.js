/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'borrowers',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    
    firebase: {
      apiKey: 'AIzaSyB_CUQBckWiCBTn9XhOezkxJ4ukGIQOLLs',
      authDomain: 'emberfire1.firebaseapp.com',
      databaseURL: 'https://emberfire1.firebaseio.com',
      storageBucket: 'emberfire1.appspot.com',
    },
    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': '\'self\' \'unsafe-eval\' apis.google.com  ws://localhost:3001 localhost:3001"',
      'frame-src': '\'self\' https://*.firebaseapp.com  ws://localhost:3001 localhost:3001"',
      'connect-src': '\'self\' wss://*.firebaseio.com https://*.googleapis.com ws://localhost:3001 localhost:3001"'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
