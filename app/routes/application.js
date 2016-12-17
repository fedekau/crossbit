import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(() => {
      this.transitionTo('application');
    });
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider }).then(() => {
        this.transitionTo('exercises');
      });
    },

    signOut() {
      this.get('session').close();
    }
  }
});
