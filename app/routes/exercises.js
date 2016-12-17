import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('exercise');
  },

  actions: {
    registerExercise(exercise) {
      let register = this.store.createRecord('register', { exercise });
      this.transitionTo('exercises.register', register);
    }
  }
});
