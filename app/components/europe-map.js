import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  click: function(evt) {
    console.log('tagname', evt.target.tagName);
    if (evt.target && evt.target.tagName === 'polygon') {
      alert('You clicked the SVG polygon element.');
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
