import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  favourites: DS.hasMany('favourite', { async: true }),
  articles: DS.hasMany('article', { async: true })
});
