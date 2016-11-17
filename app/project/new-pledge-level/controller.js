import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(inputs) {
      // make a newPledgeLevel based on the form inputs
      const newPledgeLevel = this.store.createRecord('pledge-level', inputs);

      // tie pledge level to project
      newPledgeLevel.set('project', this.model);

      // Save new pledge level
      newPledgeLevel.save()
        .then(() => {
          // Transition back to the project pledge level management screen
          this.transitionToRoute('project.manage', this.model.id);
        });
    },
  },
});
