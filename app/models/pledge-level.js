import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
<<<<<<< HEAD
  project: DS.belongsTo('project')
=======
  project: DS.belongsTo('project'),
>>>>>>> 1683373361984fcb68159d88780f71213ef06834
});
