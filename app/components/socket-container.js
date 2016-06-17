import Ember from 'ember';
var thisState;

export default Ember.Component.extend({

  /*
  * 1) First step you need to do is inject the socketio service into your object.
  */
  socketIOService: Ember.inject.service('socket-io'),

  init() {
    this._super(...arguments);
    this.errors = [];
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.set('errors', []);
  },

  willRender() {
    /*
    * 2) The next step you need to do is to create your actual socketIO.
    */
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    thisState = this
    /*
    * 3) Define any event handlers
    */
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);
    socket.on('time', this.onMessage, this);

    /*
    * 4) It is also possible to set event handlers on specific events
    */
    socket.on('myCustomNamespace', () => { socket.emit('anotherNamespace', 'some data'); });
  },

  onConnect() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');

    /*
    * There are 2 ways to send messages to the server: send and emit
    */
    socket.send('Hello World');
    socket.emit('Hello server');
  },

  onMessage(data) {
    // This is executed within the ember run loop
    console.log(data)
    let thisState = this
    setTimeout(function() {      
      thisState.set('newMessages', false)  
    }, 5000)
    // this.set('newMessagesArray', data.data)
    this.set('newMessages', true)
    // should loop through data.data and createRecord just on front end for message
    // for (var i = 0; i < data.data.length; i++) {
    //   debugger

    // }
    // how to do this via components?
    this.set('articles', data.data.map( article => article.attributes));
    this.set('total', data.data.length);
    // this.set('usaArticles', data.data);
  },

  myCustomNamespace(data) {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.emit('anotherNamespace', 'some data');
  },

  willDestroyElement() {
    const socket = this.get('socketService').socketFor('http://localhost:3001/');
    socket.off('connect', this.onConnect);
    socket.off('message', this.onMessage);
    socket.off('myCustomNamespace', this.myCustomNamespace);
  }
});