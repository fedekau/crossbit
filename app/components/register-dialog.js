import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(register) {
      debugger;
      this.get('onSave')(register);
    },

    cancel() {
      this.get('onCancel')();
    }
  }
});
