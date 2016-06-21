import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    activateContModal(articles) {
      this.get('activateContModal')(articles)
    },
    close() {
      this.set('isModalOpen', false);
    }
  }
});
