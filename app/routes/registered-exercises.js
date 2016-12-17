import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('registered-exercise');
  },

  actions: {
    newExercise() {
      this.transitionTo('registered-exercises.new');
    }
  }
});
