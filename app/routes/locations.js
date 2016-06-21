import Ember from 'ember';

export default Ember.Route.extend({
  isModalOpen: false,
  model() {
    return this.store.findAll('location')
  },
  actions: {    
    activateContModal(articles) {
      console.log('activating modal')

      this.set('isModalOpen', true)
      this.set('blurBackground', true)
    }, 
    close() {
      this.set('isModalOpen', false)
      this.set('blurBackground', false)
    }
  }
});
