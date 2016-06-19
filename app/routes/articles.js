import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),

  model() {
    return this.store.findAll('article');
  },

  actions: {
    favouriteBtnClick(article) {
      if (this.get('authManager').get('isAuthenticated')) {
        let user = this.store.peekRecord('user', this.get('authManager').get('session.content.authenticated.user').id)
        let favourite = this.store.createRecord('favourite', {
          user: user,
          article: article
        })
 
        favourite.save()
      }
    }
  }
});
