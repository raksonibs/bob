import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showArts(articles) {
      this.get('activateContModal')(articles)
    }
  }
});
