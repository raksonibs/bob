- Edit and Show Route: return this.store.findRecord(‘modelName’, modelId) 
- Create Route: return this.store.createRecord(‘modelName’, properties)
- Index Route: return this.store.findAll(‘modelName’)

- * isDeleted * hasDirtyAttributes * isEmpty * isError * isLoaded * isLoad- ing * isNew * isReloading * isSaving * isValid

- Ember.Route66 has a set of hooks that are called at different times during the route lifetime. For instance, we can use activate67 to do something when we enter a route, deactivate68 when we leave it or resetController69 to reset values on some actions.
- That’s partially true. It is correct that when we do this.store.findAll(‘friend’), a GET request is made to the server. When we load our existing records again, instead of throwing out all the records in the store, ember data merges the results, updating existing records and leaving untouched the ones that the server doesn’t know about. That’s why we see the new but unsaved record in the index.