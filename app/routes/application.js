import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  model() {
    return this.store.findAll('exercise');
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
