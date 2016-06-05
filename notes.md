- Edit and Show Route: return this.store.findRecord(‘modelName’, modelId) 
- Create Route: return this.store.createRecord(‘modelName’, properties)
- Index Route: return this.store.findAll(‘modelName’)

- * isDeleted * hasDirtyAttributes * isEmpty * isError * isLoaded * isLoad- ing * isNew * isReloading * isSaving * isValid

- Ember.Route66 has a set of hooks that are called at different times during the route lifetime. For instance, we can use activate67 to do something when we enter a route, deactivate68 when we leave it or resetController69 to reset values on some actions.
- That’s partially true. It is correct that when we do this.store.findAll(‘friend’), a GET request is made to the server. When we load our existing records again, instead of throwing out all the records in the store, ember data merges the results, updating existing records and leaving untouched the ones that the server doesn’t know about. That’s why we see the new but unsaved record in the index.

- What if we want to load thousands of relationships in addition to implementing strategies like pagination or search? Enter async relationships.
- Ember-Data offers support for working with asynchronous relationships. All we have to do is mark the attribute as async. Then we can include the ids or an URL from which to load the records.
- First it loads the parent record. Then it will load the records in the relationship, but only when we explicitly call the attribute. 
- isFulfilled isPending isRejected isSettled
- So many options. What should we use? It depends on our scenarios and how we want to load our data. Side-loading works perfectly when we are not fetching many records, but it can make your API really slow if you are returning a lot of relationships and a lot of records.
- 
Async helps us alleviate the issue when we have a lot of records. This can help us keep our end-points lighter, but it might add some overhead when getting all the ids in a relationship.
- 
The faster option from an API point of view would be to use links. This won’t require the parent to know anything about its children, but then we lose other benefits.
- or example, when using ids, Ember-Data will only load records from the server that are not yet available in the store. However, if some of the records are loaded, it won’t make that request. With links, you lose that benefit because Ember-Data doesn’t have any information. It will make the request and load data that you might already have available.
- Computed properties and observers are normally fired whenever we call this.set() on the property they depend on. The downside of this is that they will be recalculated even if the value is the same.
- Ember has a built-in implementation of the Observer pattern94, which allows us to keep track of changes in any property or computed property.
- As we mentioned in the section on adapters, ember-cli allows us to group things that are logically related under a single directory. Such a structure is known as “pods”.

- bucket public:
{
   }
"Version": "2012-10-17",
"Statement": [
{
} ]
"Sid": "AddPerm",
"Effect": "Allow",
"Principal": "*",
"Action": "s3:GetObject",
"Resource": "arn:aws:s3:::REPLACE-WITH-REAL-BUCKET-NAME/*"