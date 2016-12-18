import Ember from 'ember';

export default Ember.Component.extend({
  showMoreInfo: false,

  actions: {
    moreInfo() {
      this.toggleProperty('showMoreInfo');
    }
  }
});
