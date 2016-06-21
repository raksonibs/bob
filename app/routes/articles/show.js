import Ember from 'ember';

export default Ember.Route.extend({
  socketio: Ember.inject.service('eyeoh'),
  model(params) {
    return this.store.findRecord('article', params.article_id)
  },
  afterModel() {
    this.get('socketio').willRender()
  }
});
