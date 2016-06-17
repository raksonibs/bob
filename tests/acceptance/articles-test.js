import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | articles');

test('visiting /articles', function(assert) {
  visit('/articles');

  andThen(function() {
    assert.equal(currentURL(), '/articles');
  });
});

test('should list articles', function(assert) {
  visit('/')
  andThen(function() {
    var articleCount = 20
    assert.equal(this.$('.article').length, articleCount, `should see #{articleCount} articles`)
  })
})

test('should link to article', function(assert) {

})
