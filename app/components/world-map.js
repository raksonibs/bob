import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    activateContModal(articles) {
      this.get('activateContModal')(articles)
    }
  }
});
