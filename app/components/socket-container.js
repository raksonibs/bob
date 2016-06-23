import Ember from 'ember';
// const { Component } from Ember;
var thisState;

export default Ember.Component.extend({
  socketIOService: Ember.inject.service('socket-io'),

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
    thisState = this
    console.log("Setting stuff up again")
    this.set('newMessagesArray', data.data)
    // this.actions.reload()
    console.log("reloading in socket-container")
    this.get('reloadWorldNums')()
    // Component.send('reload')
    // will just fade out!
    setTimeout(function() {
      thisState.set('newArticles', false)
    }, 10010)
  },

  willDestroyElement() {
    const socket = this.get('socketIOService').socketFor('http://localhost:3001/');
    socket.off('connect', this.onConnect);
    socket.off('message', this.onMessage);
  },

  actions: {
    reload() {
      console.log("reloading in socket-container")
      // this.get('reloadWorldNums')()
      this.sendAction('reloadWorldNums')
    }
  }
});
