* ember script which runs with socket.io constantly pegging api to check for new articles
- just connects with socket.io and rails app for initial info.
It is injected with a service locator pattern, meaning it will abstract the maps API from the code that uses it, allowing for easier refactoring and maintenance
It is lazy-loaded, meaning it won't be initialized until it is called the first time. In some cases this can reduce your app's processor load and memory consumption.
It is a singleton, which will allow us cache map data.
It follows a lifecycle, meaning we have hooks to execute cleanup code when the service stops, preventing things like memory leaks and unnecessary processing.