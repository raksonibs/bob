import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  antCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "Antartica"})
  }),
  namCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "North America"})
  }),
  samCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "South America"})
  }),
  asiaCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "Asia"})
  }),
  afrCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "Africa"})
  }),
  eurCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "Europe"})
  }),
  oceCount: Ember.computed(function() {
    return this.get('store').query('location', { continent: "Oceania"})
  })
});
