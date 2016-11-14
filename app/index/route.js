import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'Fancy Iced Coffee',
        description: 'Isaac probably needs one of these',
        goal: 1000000,
        earned: 20000,
      },
      {
        name: 'Cat Sticker Book',
        description: 'Because why not?',
        goal: 5000,
        earned: 1000000,
      },
      {
        name: 'Robot Trashcans',
        description: 'This changes EVERYTHING',
        goal: 1000000,
        earned: 250000,
      },
      {
        name: 'Potato Salad',
        description: 'Why did you spend money on this?',
        goal: 5,
        earned: 1000000000,
      },
    ];
  }
});
