import config from '../config/environment';
// import Firebase from 'firebase';
// import FirebaseAdapter from 'emberfire/adapters/firebase';

// export default FirebaseAdapter.extend({
//   firebase: new Firebase(config.firebase)
// });

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api',
  coalesceFindRequests: true,
  headers: {
      "Content-type": "x-www-form-urlencoded" // workaround for laravel
  }
});