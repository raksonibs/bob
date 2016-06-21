import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  click: function(evt) {
    console.log('tagname', evt.target.tagName);
    if (evt.target && evt.target.tagName === 'path') {
      // alert('You clicked the SVG polygon element.');
      console.log("clicked")
      this.get('activateContModal')(this.get('articles'))
    }
  },
  actions: {
    someAction() {
      console.log('Clicked!');
    },
    showArts() {
      this.get('activateContModal')(this.get('articles'))
    }
  }
});
