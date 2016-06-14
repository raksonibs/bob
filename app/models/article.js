import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  abstract: DS.attr('string'),
  url: DS.attr('string'),
  title: DS.attr('string'),
  section: DS.attr('string'),
  subSection: DS.attr('string')
});
