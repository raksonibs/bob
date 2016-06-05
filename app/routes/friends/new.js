import Ember from 'ember';

export default Ember.Route.extend({
    // n ember data class in charge of managing everything related to our model’s data. It knows about all the records we currently have loaded in our application and it has some functions that will help us to find, create, update, and delete records. During the whole application life cycle there is a unique instance of the Store, and it is injected as a property into every Route, Controller, Serializer, and adapter under the key store.
    // Ember expects us to define our action handlers inside the property actions in the controller or route. When the action is called, ember first looks for a definition in the controller. If there is none, it goes to the route and keeps bubbling until application route. If any of the actions returns false, then it stops bubbling.
    model() {
      return this.store.createRecord('friend')
    }// }, resetController(controller, isExiting) {
    //   if (isExiting) {
    //     var model = controller.get('model')

    //     if (model.get('isNew')) {
    //       model.destroyRecord()
    //     }
    //   }
    // }
});
