import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('register');
    return this.store.findAll('registered-exercise');
  },

  actions: {
    newExercise() {
      this.transitionTo('registered-exercises.new');
    }
  }
});
