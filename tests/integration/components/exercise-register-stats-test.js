import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exercise-register-stats', 'Integration | Component | exercise register stats', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exercise-register-stats}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exercise-register-stats}}
      template block text
    {{/exercise-register-stats}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
