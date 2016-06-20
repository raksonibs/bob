import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('location')
  },
  actions: {    
    activateContModal(articles) {      
      this.set('isModalOpen', true)
      this.get('blurBackground')(true)
    }, 
    close() {
      this.set('isModalOpen', false)
      this.get('blurBackground')(false)
    }
  }
});
