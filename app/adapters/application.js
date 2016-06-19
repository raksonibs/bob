// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

export default JSONAPIAdapter.extend({
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});