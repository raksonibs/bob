import DS from 'ember-data';
import Ember from 'ember'
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  articles: DS.hasMany('article'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName')
    } // }, set(key, value) {
    //   var name = value.split(" ")

    //   this.set('firstName', name[0])
    //   this.set('lastName', name[1])
    //   // be read only though, bad practice here
    //   return value
    // }
  }),
  capitalizedFirstName: changeGate('firstName', function(firstName) {
    return Ember.String.capitalize(firstName); 
  })
});
