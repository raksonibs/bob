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
  this.route('articles.show', { path: 'articles/:article_id'});
  this.route('login');
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
