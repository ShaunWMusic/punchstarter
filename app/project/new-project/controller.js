import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      // Really cheap validation
      if (name && goal && description) {
        // Save the new project
        fetch(`${config.apiUrl}/projects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, goal, description }),
        }).then((r) => r.json())
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
