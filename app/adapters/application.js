// // import FirebaseAdapter from 'emberfire/adapters/firebase';

// // export default FirebaseAdapter.extend({
// // });

// import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
//   host: 'http://localhost:3000',
//   namespace: 'api',
//   coalesceFindRequests: true,
//   headers: {
//       "Content-type": "x-www-form-urlencoded" // workaround for laravel
//   }
// });

import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api',
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log("Calling shouldBackgroundReloadRecord");
    const loadedAt = snapshot.record.get('loadedAt');

    // if it was loaded more than an hour ago
    if (Date.now() - loadedAt > 3600000) {
      return true;
    } else {
      return false;
    }
  }

});