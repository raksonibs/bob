// import JSONAPIAdapter from 'ember-data/adapters/json-api';

// export default JSONAPIAdapter.extend({
// });

import ActiveModelAdapter from 'active-model-adapter';
  export default ActiveModelAdapter.extend({ namespace: 'api'
});