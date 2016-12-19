import Ember from 'ember';

export default Ember.Component.extend({
  showMoreInfo: false,

  exerciseTypeClass: Ember.computed('model.exercise.type', function() {
    let type = this.get('model.exercise.type');
    return `card-media-${type}`;
  }),

  actions: {
    moreInfo() {
      this.toggleProperty('showMoreInfo');
    }
  }
});
