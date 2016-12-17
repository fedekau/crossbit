import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(register) {
      this.get('onSave')(register);
    },

    cancel() {
      this.get('onCancel')();
    }
  }
});
