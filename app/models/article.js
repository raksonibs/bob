import DS from 'ember-data';

export default DS.Model.extend({
  favourites: DS.hasMany('favourite', { async: true }),
  location: DS.belongsTo('location', { async: true }),
  story: DS.attr('string'),
  title: DS.attr('string'),
  publishedAt: DS.attr('date')
});
