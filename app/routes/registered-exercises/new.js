import Ember from 'ember';
import RegisteredExercise from 'crossbit/models/registered-exercise';

export default Ember.Route.extend({
  model() {
    return new RegisteredExercise();
  },

  actions: {
    registerExercise(registeredExercise) {
      registeredExercise.save().then(() => {
        this.transitionTo('registered-exercises');
      });
    },

    cancelExerciseRegistration() {
      this.transitionTo('registered-exercises');
    }
  }
});
