import ArticlesBaseController from './base';

export default ArticlesBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends');

      return false;
    }
  }
});