import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let registers = this.store.findAll('register');
    let exercises = this.store.findAll('exercise');

    return Ember.RSVP.hash({
      registers,
      exercises
    });
  },

  actions: {
    registerExercise(exercise) {
      let register = this.store.createRecord('register', { exercise });
      this.transitionTo('exercises.register', register);
    }
  }
});
