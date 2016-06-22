import Ember from 'ember';
var controllerHere;
var modelsHere;
export default Ember.Route.extend({
  socketio: Ember.inject.service('eyeoh'),
  socketIOService: Ember.inject.service('socket-io'),
  newData: [],
  newArticles: false,
  model() {
    return Ember.RSVP.hash({
        // locations: this.store.findAll('location'),
        asiaArticles: this.store.query('article', { continent: "Asia"}),
        namArticles: this.store.query('article', { continent: "North America"}),
        antArticles: this.store.query('article', { continent: "Antartica"}),
        samArticles: this.store.query('article', { continent: "South America"}),
        afrArticles: this.store.query('article', { continent: "Africa"}),
        eurArticles: this.store.query('article', { continent: "Europe"}),
        oceArticles: this.store.query('article', { continent: "Oceania"}),
        newArticles: this.get('newArticles')
      });
  },

  setupController(controller, models) {
    controllerHere = controller 
    modelsHere  = models
    controller.setProperties(models)
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
