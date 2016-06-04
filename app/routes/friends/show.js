import Ember from 'ember';

export default Ember.Route.extend({
  // For this specific scenario, calling this.transitionTo(‘friends.index’) from within the friends index route will behave like a no-op. This is important to mention because we could have one single implementation for the delete action and access it via event bubbling.
//   actions: {
// delete(friend) { friend.destroyRecord().then(() => {
// this.transitionTo('friends.index'); });
// } }
});
