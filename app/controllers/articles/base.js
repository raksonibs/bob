import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription:     Ember.computed.notEmpty('model.description'),
  isValid:      Ember.computed.and(
    'hasDescription'
  ),
  actions: {
    save() {
      let thisBe = this
      if (this.get('isValid')) {
        this.get('model').save().then((article) => {
          this.transitionToRoute('friends.show', thisBe.modelFor('friends/show'));
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      return false;
    },
    cancel() {
      return true;
    }
  }
});