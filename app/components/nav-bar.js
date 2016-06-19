import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('authManager').invalidate();
    }
  }
});
