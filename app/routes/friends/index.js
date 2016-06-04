import Ember from 'ember';

export default Ember.Route.extend({
    // this.store.findRecord(‘friend’, 1) or this.store.queryRecord(‘friend’, {active: true}), which creates the following requests to the API /api/friends/1 or /api/friends?active=true.
    model() {
      return this.store.findAll('friend')
    }

//     actions: {
//       delete(friend) {
//       friend.destroyRecord();
// return false; }
//     }
});
