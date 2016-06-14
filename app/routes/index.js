import Ember from 'ember';
import request from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  var host = config.host || '';
  return request(host + '/articles').then(function(data){ return {
    debugger
    friendsCount: data.friends.length
  };
});
