import Ember from 'ember';
import SocketIO from 'ember-websockets/services/socket-io'

export default SocketIO.extend({
  socketIOService: Ember.inject.service('socket-io'),

  setUp() {
  
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);
    socket.on('myCustomNamespace', () => { socket.emit('anotherNamespace', 'some data'); });
  },

  onConnect() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.send('Hello World');
    socket.emit('Hello server');
  },

  onMessage(data) {
    
  },

  myCustomNamespace(data) {
    const socket = this.get('socketIOService').socketFor('http://localhost:7000/');
    socket.emit('anotherNamespace', 'some data');
  },

  willDestroyElement() {
    const socket = this.get('socketService').socketFor('http://localhost:7000/');
    socket.off('connect', this.onConnect);
    socket.off('message', this.onMessage);
    socket.off('myCustomNamespace', this.myCustomNamespace);
  }
});
