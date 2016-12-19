import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number', { defaultValue: null }),
  time: DS.attr({ defaultValue: null }),
  date: DS.attr('date'),

  shortDate: Ember.computed('date', function() {
    return this.get('date').toLocaleDateString();
  })
});
