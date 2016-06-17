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
    controller.set('total', models.usaArticles.toArray().length + models.articles.toArray().length)
    controller.set('totalUSA', models.usaArticles.toArray().length)
    controller.set('totalWorld', models.articles.toArray().length - models.usaArticles.toArray().length)
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
