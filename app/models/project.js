import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  goal: DS.attr('number'),
  description: DS.attr('string'),
  pledgeLevels: DS.hasMany('pledge-level')
});
