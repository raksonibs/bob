import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),
  actions: {
    blurBackground() {
      this.set('isModalOpen', true)
      this.get('blurBackground')(true)
    },
    favouriteBtn(article) {
      this.get('favouriteBtnClick')(article)
    },
    close() {
      this.set('isModalOpen', false)
      this.get('blurBackground')(false)
    }
  }
});
