import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    article: null, //passed-in
    articleStates: null, //passed-in
    actions: {
      saveArticle() {
        let article = this.get('article')
        // sends article but actions won't bubble up, so need to bind such an action to a prproty and call it using sendAction
        if (article.get('hasDirtyAttributes')) {          
          this.sendAction('save', article)
        }
      }
    }
    // },
    // stateChanged: Ember.observer('article.state', function() {
    //   var article = this.get('article')
    //   console.log("OMG change")
    // })
  //    setObserver: function() {
  //   this.addObserver('article.state', this, this.stateChanged);
  // }.on('init'),
  // stateChanged() {
  //   var article = this.get('article');
  //   console.log('OMG Expensive operation because article state changed');
  // },

});
