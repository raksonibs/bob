import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // modelFor grabs model for any parent route. 
    return this.modelFor('friends/show').get('articles')
  }
});
