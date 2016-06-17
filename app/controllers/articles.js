import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: ['limit', 'section'],
  limit: 5,
  total: computed('model', function() {
    return this.get('model').total;
  }),

  showAll: computed('total', 'model', function() {
    return this.get('total') > this.get('model.length')
  }),

  filteredArticlesWorld: Ember.computed('section', 'model', function() {
    // const section = this.get('section')
    const articles = this.get('model')
    return articles
  }),

  filteredArticlesUSA: Ember.computed('section', 'model', function() {
    // const section = this.get('section')
    const articles = this.get('model')
    return articles.filterBy('section', 'U.S.')
  })
});
