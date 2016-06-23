import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  isModalOpen: false,
  click: function(evt) {
    console.log('tagname', evt.target.tagName);
    if (evt.target && evt.target.tagName === 'path') {
      // alert('You clicked the SVG polygon element.');
      console.log("clicked")
      this.set('isModalOpen', true);
      this.get('activateContModal')(this.get('articles'))
    }
  },
  mouseEnter: function(evt) {
    console.log('comes in')
    this.set('showHoverBox', true)
  },
  mouseLeave: function(evt) {
    console.log('comes out')
    this.set('showHoverBox', false)
  },
  actions: {
    someAction() {
      console.log('Clicked!');
    },
    showArts() {
      this.get('activateContModal')(this.get('articles'))
    }, 
    close() {      
      this.set('isModalOpen', false);
      this.set('blur', false)
    }
  }
});
