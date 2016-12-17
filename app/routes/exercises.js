import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('exercise');
  },

  actions: {
    registerExercise(exercise) {
      this.transitionTo('exercises.register', exercise);
    }
  }
});
