import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registered-exercise-info', 'Integration | Component | registered exercise info', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registered-exercise-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#registered-exercise-info}}
      template block text
    {{/registered-exercise-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
