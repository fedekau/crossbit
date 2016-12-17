import DS from 'ember-data';

export default DS.Model.extend({
  exercise: DS.belongsTo('exercise'),
  registers: DS.hasMany('register')
});
