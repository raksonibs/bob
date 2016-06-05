import DS from 'ember-data';

export default DS.RESTAdapter.extend({
host: 'http://localhost:3000',
namespace: 'api/v4',
coalesceFindRequests: true,
headers: {
    "Content-type": "x-www-form-urlencoded" // workaround for laravel
}});

// request to load sync data only happen once,
// can put a guard and check if reuqest is fulfilled and for reload