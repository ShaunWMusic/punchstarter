import Ember from 'ember';

export function localeNumber(params/*, hash*/) {

  return params[0].toLocaleString();
}

export default Ember.Helper.helper(localeNumber);
