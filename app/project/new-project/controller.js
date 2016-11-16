import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      // Really cheap validation
      if (name && goal && description) {
        // Creates a project record LOCALLY
        const project = this.store.createRecord('project', { name, goal, description });

        // Save the new project to the server
        project.save()
          .then(() => {
            alert('Project saved!');

            // Transition back
            this.transitionToRoute('project.index');
            // In vue this.$router.push({ name: 'project.index' });
          });
      } else {
        alert('You must fill in the form');
      }
    },
  },
});
