import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.findAll('article', params);
  },

  actions: {

    showAll() {
      const total = this.controllerFor('articles').get('total')
      this.transitionTo({ queryParams: { limit: total }}); // total?
    }
  }
});
