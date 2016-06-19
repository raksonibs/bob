import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: true }),
  article: DS.belongsTo('article', { async: true })
});
