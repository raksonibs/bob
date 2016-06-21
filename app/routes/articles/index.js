import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),

  model() {
    return this.store.findAll('article');
  },

  actions: {
    blurBackground(blur) {
      this.set('isModalOpen', blur);
      this.set('blur', blur);
    },
    favouriteBtnClick(article) {
      if (this.get('authManager').get('isAuthenticated')) {
        let user = this.store.peekRecord('user', this.get('authManager').get('session.content.authenticated.user').id)
        let favourite = this.store.createRecord('favourite', {
          user: user,
          article: article
        })
 
        favourite.save()
      }
    }, 
    close() {
      this.set('isModalOpen', false);
      this.set('blur', false);
    }
  }
});
