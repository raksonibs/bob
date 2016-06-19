import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    favouriteBtn(article) {
      this.get('favouriteBtnClick')(article)
    }
  }
});
