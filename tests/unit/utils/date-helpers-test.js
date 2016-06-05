import { module, test } from 'ember-qunit';
import dateHelpers from '../../../utils/date-helpers';
module('Utils: formatDate');
test('formats a date object', function(assert) {
var date = new Date("11-3-2015");
var result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');
  assert.equal(result, 'Mon Nov 03 2014', 'returns a readable string');
});