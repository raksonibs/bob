import Ember from 'ember';

export default Ember.Component.extend({

  /*
  * 1) First step you need to do is inject the socketio service into your object.
  */
  socketIOService: Ember.inject.service('socket-io'),

  willRender() {
    /*
    * 2) The next step you need to do is to create your actual socketIO.
    */
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');

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