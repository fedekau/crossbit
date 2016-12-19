import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().then(() => {
      if (this.get('session.isAuthenticated')) {
        this.transitionTo('registered-exercises');
      } else {
        this.transitionTo('application');
      }
    }).catch(() => {
      if (this.get('session.isAuthenticated')) {
        this.transitionTo('registered-exercises');
      } else {
        this.transitionTo('application');
      }
    });
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider }).then(() => {
        this.transitionTo('registered-exercises');
      });
    },

    signOut() {
      this.get('session').close();
    }
  }
});
