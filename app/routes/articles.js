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

  afterModel(model) {

  },

  setupController(controller, model) {
    controller.set('articles', model)
    this.store.query('article', { section: { name: 'U.S.' } }).then(function(usaArticles) {
      controller.set('usaArticles', usaArticles)
    })
  }

  actions: {

    showAll() {
      const total = this.controllerFor('articles').get('total')
      this.transitionTo({ queryParams: { limit: total }}); // total?
    }
  }
});
