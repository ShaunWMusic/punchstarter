import Ember from 'ember';

<<<<<<< HEAD

export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      if (name && goal && description) {
        const project = this.store.createRecord('project', { name, goal, description });

=======
export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      // Really cheap validation
      if (name && goal && description) {
        // Creates a project record LOCALLY
        const project = this.store.createRecord('project', { name, goal, description });

        // Save the new project to the server
>>>>>>> 1683373361984fcb68159d88780f71213ef06834
        project.save()
          .then(() => {
            alert('Project saved!');

<<<<<<< HEAD
            this.transitionToRoute('project.index');
=======
            // Transition back
            this.transitionToRoute('project.index');
            // In vue this.$router.push({ name: 'project.index' });
>>>>>>> 1683373361984fcb68159d88780f71213ef06834
          });
      } else {
        alert('You must fill in the form');
      }
    },
  },
});
