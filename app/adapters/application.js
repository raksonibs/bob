import DS from 'ember-data';

export default DS.RESTAdapter.extend({
host: 'http://localhost:3000',
namespace: 'api/v4',
headers: {
    "Content-type": "x-www-form-urlencoded" // workaround for laravel
}});