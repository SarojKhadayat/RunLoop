import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('runloop-queues-component', 'Integration | Component | runloop queues component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{runloop-queues-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#runloop-queues-component}}
      template block text
    {{/runloop-queues-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
