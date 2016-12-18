import Ember from 'ember';

export default Ember.Component.extend({
  max: Ember.computed('model.registers.[]', function() {
    let exercise = this.get('model');

    return Math.max(...exercise.get('registers').map(function(r) {
      return r.get('weight');
    }));
  }),

  last: Ember.computed('model.registers.[]', function() {
    let exercise = this.get('model');

    let orderedRegisters = exercise.get('registers').toArray().sort(function(e1, e2) {
      return e1.get('date') - e2.get('date');
    });

    return orderedRegisters[orderedRegisters.length - 1].get('weight');
  })
});
