import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('chat')
  this.route('index')

  this.route('admin', function() {
    this.route('invitations');
  });

  this.route('login')

  this.route('articles', { path: '/' });
});

export default Router;
