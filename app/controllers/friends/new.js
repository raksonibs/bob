import Ember from 'ember';

export default Ember.Controller.extend({
    // Again, it is bubbling because we are returning true from every child actions. If we want the action to stop bubbling, let’s say in the friends route, we just need to return false in the actions specified in app/routes/friends.js and we’ll g
    isValid: Ember.computed(
      'model.email',
      'model.firstName',
      'model.lastName',
      'model.twitter',
      {
        get() {
          return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'))
        }
      },
      actions: {
        save() {
          if(this.get('isValid')) {
            this.get('model').save().then(friend) => {
              this.transitionToRoute('friends.show', friend)
            }
          } else {
            this.set('errorMessage', 'You have to fill the fields')
          }

          return false
        }
      }, 
      cancel() {
        this.transitionToRoute('friends')
        return false;
      }
      )
});
