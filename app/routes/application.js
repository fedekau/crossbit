import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider });
    },

    signOut() {
      this.get('session').close();
    }
  }
});
