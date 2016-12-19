import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(), // in ['weightlifting', 'cardio']

  isCardio() {
    return this.get('type') === 'cardio';
  },

  isWeightlifting() {
    return this.get('type') === 'weightlifting';
  }
});
