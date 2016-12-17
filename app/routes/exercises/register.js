import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addRegister(register) {
      register.save().then(() => {
        this.transitionTo('exercises');
      });
    },

    cancelRegister(){
      this.transitionTo('exercises');
    }
  }
});
