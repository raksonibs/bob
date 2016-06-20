import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    blurBackground() {
      this.set('isModalOpen', true)
      this.get('blurBackground')(true)
    },
    close() {
      this.set('isModalOpen', false)
      this.get('blurBackground')(false)
    }
  }
});
