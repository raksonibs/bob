import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('article-filter', 'Integration | Component | article filter', {
  integration: true
});

const ITEMS = [{article: 'San Francisco'}, {article: 'Portland'}, {article: 'Seattle'}];
const FILTERED_ITEMS = [{article: 'San Francisco'}];

test('should initially load all listings', function (assert) {
  // we want our actions to return promises, since they are potentially fetching data asynchronously
  this.on('filterByArticle', (val) => {
    if (val === '') {
      return Ember.RSVP.resolve(ITEMS);
    } else {
      return Ember.RSVP.resolve(FILTERED_ITEMS);
    }
  });

  // with an integration test, you can set up and use your component in the same way your application 
  // will use it.
  this.render(hbs`
    {{#list-filter filter=(action 'filterByArticle') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="article">
          {{item.article}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // the wait function will return a promise that will wait for all promises 
  // and xhr requests to resolve before running the contents of the then block.
  this.$('.list-filter input').val('San').keyup();

  return wait().then(() => {
    assert.equal(this.$('.city').length, 1);
    assert.equal(this.$('.city').text().trim(), 'San Francisco');
  });
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{article-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#article-filter}}
      template block text
    {{/article-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
