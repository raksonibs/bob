import Ember from 'ember';

export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),
  dataArticles: {},

  init() {
    this._super(...arguments);
    this.errors = [];
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.set('errors', []);
  },

  willRender() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);
    socket.send('Connecting to new articles');
    socket.on('new_articles', this.onNewArticles, this);
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

  onNewArticles(data) {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.send('new articles recieved on client: ' + data.data.length);
    this.set('dataArticles', data)
    this.set('newArticles', true)
    const thisState = this
    console.log("Setting stuff up again")
    this.set('newMessagesArray', data.data)

    // will just fade out!
    // setTimeout(function() {
    //   thisState.set('newData', [])
    //   thisState.set('newArticles', false)
    // }, 3000)
  },


  willDestroyElement() {
    const socket = this.get('socketService').socketFor('http://localhost:3001/');
    socket.off('connect', this.onConnect);
    socket.off('message', this.onMessage);
  }
});
