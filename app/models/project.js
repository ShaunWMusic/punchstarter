import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  goal: DS.attr('number'),
  description: DS.attr('string'),
<<<<<<< HEAD
  pledgeLevels: DS.hasMany('pledge-level')
=======

  pledgeLevels: DS.hasMany('pledge-level'),
>>>>>>> 1683373361984fcb68159d88780f71213ef06834
});
