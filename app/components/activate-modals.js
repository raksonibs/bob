import Ember from 'ember';

export default Ember.Component.extend({
  continents: [{name: "Africa"}, { name: "Europe"}, { name: "South America"}, { name: "North America"}, { name: "Asia"}, { name: "Oceania"}, { name: "Antartica"}],
  actions: {
    activateContModal() {
      this.get('activateContModal')();
    }
  }
});
