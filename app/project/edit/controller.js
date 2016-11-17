import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
<<<<<<< HEAD
    saveForm() {

=======
    saveForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          this.transitionToRoute('project.index');
        });
>>>>>>> 1683373361984fcb68159d88780f71213ef06834
    },
  },
});
