import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('exercise', params['exercise_id']);
  },

  actions: {
    addRegister() {
      this.transitionTo('exercises');
    },

    cancelRegister(){
      this.transitionTo('exercises');
    }
  }
});
