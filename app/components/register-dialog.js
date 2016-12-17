import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  exercises: Ember.computed(function() {
    return this.get('store').findAll('exercise');
  }),

  saveDisabled: Ember.computed('selectedExercise', 'exerciseWeight', function(){
    return !(this.get('selectedExercise') && this.get('exerciseWeight'));
  })
});
