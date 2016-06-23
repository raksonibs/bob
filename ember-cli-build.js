/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/jquery.gsap.min.js')  
  app.import('vendor/TimelineMax.min.js')  
  app.import('vendor/TweenMax.min.js')  
  return app.toTree();
};
