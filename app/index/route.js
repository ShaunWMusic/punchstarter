import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },
});
