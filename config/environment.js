/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'crossbit',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['torii'] = { sessionServiceName: 'session' };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    //
    ENV['firebase'] = {
      apiKey: 'AIzaSyDtpOfK-JRVHQzXQ3Ahb9arihRUMwaEH4Y',
      authDomain: 'crossbit-cc703.firebaseapp.com',
      databaseURL: 'https://crossbit-cc703.firebaseio.com',
      storageBucket: 'crossbit-cc703.appspot.com',
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['firebase'] = {
      apiKey: 'AIzaSyD5_cJv-wlwzV_wFaopDeAg6iNTWrWz8V4',
      authDomain: 'crossbit-production.firebaseapp.com',
      databaseURL: 'https://crossbit-production.firebaseio.com',
      storageBucket: 'crossbit-production.appspot.com',
    };
  }

  return ENV;
};
