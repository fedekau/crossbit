import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  session: Ember.inject.service(),

  pathForType(type) {
    let session = this.get('session');

    if (session.get('isAuthenticated') && type !== 'exercise') {
      let uid = this.get('session.currentUser.uid');
      let path = Ember.String.pluralize(type);

      return  `users/${uid}/${path}`;
    } else {
      return this._super(type);
    }
  }
});
