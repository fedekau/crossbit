import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  exercise: DS.belongsTo('exercise')
});
