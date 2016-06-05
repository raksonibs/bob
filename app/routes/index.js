import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    return request('http://localhost:3000/api/v4/friends').then(function(data) {
      return {
        friendsCount: data.friends.length
      }
    })
  }
});
