import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('third-party-library-component', 'Integration | Component | third party library component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{third-party-library-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#third-party-library-component}}
      template block text
    {{/third-party-library-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
