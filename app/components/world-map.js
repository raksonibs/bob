import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  antCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "Antartica"})
  }),
  namCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "North America"})
  }),
  samCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "South America"})
  }),
  asiaCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "Asia"})
  }),
  afrCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "Africa"})
  }),
  eurCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "Europe"})
  }),
  oceCount: Ember.computed(function() {
    return this.get('store').query('article', { continent: "Oceania"})
  }),

  actions: {
    activateContModal(articles) {
      this.get('activateContModal')(articles)
    }
  }
});
