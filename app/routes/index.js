import Ember from 'ember';
import request from 'ic-ajax';
import config from '../config/environment';

var host = config.host || '';

export default Ember.Route.extend({

  model() {
    return request(host +'/api/v4/friends').then(function(data) {
      return {
        friendsCount: data.friends.length
      }
    })
  }
});
