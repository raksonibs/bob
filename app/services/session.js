import Ember from 'ember';
import ESASession from 'ember-simple-auth/services/session';
const {
  DS
} = Ember;

export default ESASession.extend({
  store: Ember.inject.service(),
  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      let user = this.get('session.content.authenticated.user');
      const promise = this.get('store').findRecord('user', user.id);

      return DS.PromiseObject.create({ promise: promise });
    }
  })
});
