import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      registeredExercises: this.store.findAll('registered-exercise'),
      registers: this.store.findAll('register')
    });
  },

  actions: {
    newExercise() {
      this.transitionTo('registered-exercises.new');
    }
  }
});
