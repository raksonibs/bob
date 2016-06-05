import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    article: null, //passed-in
    articleStates: null, //passed-in
    actions: {
      saveArticle(article) {
        // sends article but actions won't bubble up, so need to bind such an action to a prproty and call it using sendAction
        this.sendAction('save', article)
      }
    }
});
