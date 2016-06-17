import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      usaArticles: this.store.query('article', {section: 'U.S.'})
      // category: this.store.findAll('category'),
      // weather: this.get('weather').current()
    });
  },

  setupController(controller, models) {
    // controller.set('articles', model)
    // this.store.query('article', { section: { name: 'U.S.' } }).then(function(usaArticles) {
    //   controller.set('usaArticles', usaArticles)
    // })
    controller.set('articles', models.articles);
    controller.set('usaArticles', models.usaArticles);
    // or, more concisely:
    // controller.setProperties(models);
  },

  actions: {

    showAll() {
      const total = this.controllerFor('articles').get('total')
      this.transitionTo({ queryParams: { limit: total }}); // total?
    }
  }
});
