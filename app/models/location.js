import DS from 'ember-data';

export default DS.Model.extend({
  articles: DS.hasMany('article', { async: true }),
  address: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
