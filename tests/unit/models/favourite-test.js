import { moduleForModel, test } from 'ember-qunit';

moduleForModel('favourite', 'Unit | Model | favourite', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:article']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
