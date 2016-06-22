import Ember from 'ember';

// export function eq(params, hash) {
//   return params;
// }

const eq = (params) => params[0] === params[1];

export default Ember.Helper.helper(eq);
