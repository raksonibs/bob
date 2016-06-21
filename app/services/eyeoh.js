import Ember from 'ember';
import SocketIO from 'ember-websockets/services/socket-io'

export default SocketIO.extend({
  socketIOService: Ember.inject.service('socket-io'),

  setUp() {
  
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.on('connect', this.onConnect, this);
    socket.on('message', this.onMessage, this);    
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
    return data.data
  },

  addNewArtListener() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.send('Connecting to new articles');
    socket.on('new_articles', this.onNewArticles, this);
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
