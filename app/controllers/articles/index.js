import ArticlesBaseController from './base';

export default ArticlesBaseController.extend({
  possibleStates: ["borrowed", "returned"], 
  contentDidChange: Ember.observer('model.[]', function() {
    console.log('Called when we add or removed an article.');
  }),
stateDidChange: Ember.observer('model.@each.state', function() { console.log('Called when the state property change for any of the articles.'\
);
})