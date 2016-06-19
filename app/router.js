import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('locations');
  this.route('favourites');
  this.route('articles', { path: '/' });
  this.route('articles');
  this.route('login');
});

export default Router;
