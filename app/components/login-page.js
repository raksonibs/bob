import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service(),
  
  actions: {
    authenticate(){
      const { login, password } = this.getProperties('login', 'password');
      this.get('authManager').authenticate(login, password).then(() => {
        alert("success")
      }, (err) => {
        alert('error ' + err.responseToken)
      })
    }
  }
});
