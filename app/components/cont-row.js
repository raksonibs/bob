import Ember from 'ember';

export default Ember.Component.extend({
  openCountry: "Asia",
  actions: {
    showArts(name) {
      console.log('clicked inside cont-row')
      this.set('openCountry', name);
      this.set('isModalOpen', true);
      // this.get('activateContModal')(articles)
    }
  }
});
