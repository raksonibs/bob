import Ember from 'ember';
var controllerHere;
var modelsHere;
export default Ember.Route.extend({
  socketio: Ember.inject.service('eyeoh'),
  socketIOService: Ember.inject.service('socket-io'),
  newData: [],
  newArticles: false,
  model() {
    return Ember.RSVP.hash({
        // locations: this.store.findAll('location'),
        asiaArticles: this.store.query('article', { continent: "Asia"}),
        namArticles: this.store.query('article', { continent: "North America"}),
        antArticles: this.store.query('article', { continent: "Antartica"}),
        samArticles: this.store.query('article', { continent: "South America"}),
        afrArticles: this.store.query('article', { continent: "Africa"}),
        eurArticles: this.store.query('article', { continent: "Europe"}),
        oceArticles: this.store.query('article', { continent: "Oceania"}),
        newArticles: this.get('newArticles')
      });
  },

  setupController(controller, models) {
    controllerHere = controller 
    modelsHere  = models
    controller.setProperties(models)
  },
  
  actions: {    
    activateContModal(articles) {
      console.log('activating modal')
      this.set('isModalOpen', true)
      this.set('blurBackground', true)
    }, 
    close() {
      this.set('isModalOpen', false)
      this.set('blurBackground', false)
    }
  },

  setUp() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);    
  },

  onNewArticles(data) {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.send('new articles recieved on client: ' + data.data.length);
    // this.set('newData', data.data)
    this.set('newArticles', true)
    const thisState = this
    console.log("Setting stuff up again")
    // modelsHere = Ember.RSVP.hash({
    //     // locations: this.store.findAll('location'),
    //     asiaArticles: this.store.query('article', { continent: "Asia"}),
    //     namArticles: this.store.query('article', { continent: "North America"}),
    //     antArticles: this.store.query('article', { continent: "Antartica"}),
    //     samArticles: this.store.query('article', { continent: "South America"}),
    //     afrArticles: this.store.query('article', { continent: "Africa"}),
    //     eurArticles: this.store.query('article', { continent: "Europe"}),
    //     oceArticles: this.store.query('article', { continent: "Oceania"}),
    //     newArticles: this.get('newArticles')
    // });

    // this.controller.setProperties(modelsHere)
    // debugger
    // this.modelFor('locations').reload();
    this.refresh()

    console.log('setting up the controller again')

    // this.model().reload()

    // setTimeout(function() {
    //   thisState.set('newData', [])
    //   thisState.set('newArticles', false)
    // }, 3000)
  },

  onConnect() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.send('Hello World');
    socket.emit('Hello server');
  },

  onMessage(data) {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.send('new message recieved on client: ' + data);
  },

  afterModel() {
    // this.get('socketio').setUp()
    // this.get('socketio').addNewArtListener()    
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);
    socket.send('Connecting to new articles');
    socket.on('new_articles', this.onNewArticles, this);
    // const socket = this.get('socketio').getSocket();
    // this.get('socketio').addNewArtListener()
    // socket.send('Connecting to new articles');
    // socket.on('new_articles', this.onNewArticles, this);
  }
});
