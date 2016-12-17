import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    registerExercise(exerciseData) {
      var newRegister = this.store.createRecord('register', {
        weight: exerciseData.exerciseWeight,
        date: new Date()
      });

      this.store.findAll('registered-exercise').then((registeredExercises) => {
       let registeredExercise = registeredExercises.find((r) => {
         return r.get('exercise.name') === exerciseData.exercise.get('name');
       }) || this.store.createRecord('registered-exercise', { exercise: exerciseData.exercise });

       registeredExercise.get('registers').addObject(newRegister);

       newRegister.save().then(() => {
         return registeredExercise.save();
       });
      });

      this.transitionTo('registered-exercises');
    },

    cancelExerciseRegistration() {
      this.transitionTo('registered-exercises');
    }
  }
});
