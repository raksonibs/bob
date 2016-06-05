import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    rturn this.store.createRecord('article', {
      state: 'borrowed',
      friend: this.modelFor('friends/show')
    })
  },
  actions: {
    save() {
      var model = this.modelFor('articles/new')

      model.save().then(() => {
        this.transitionTo('articles')
      })
    }, 
    cancel() {
      this.transitionTo('articles')
    }
  }
})