/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/jvectormap.css');
  // app.import('vendor/jvectormap.js');
  // app.import('vendor/jvectormapworld.js');
  // app.import('bower_components/jqvmap/dist/jquery.min.css');
  app.import('bower_components/jqvmap/dist/jquery.vmap.min.js');
  app.import('bower_components/jqvmap/dist/maps/jquery.vmap.world.js');

  return app.toTree();
};
