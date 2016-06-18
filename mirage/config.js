export default function() {
  this.get('/rentals', function() {
    return {
      data: [{
        
      }]
    };
  });

  this.namespace = '/api';

  // this route will handle the URL '/api/contacts'
  this.get('/articles', 'articles');
}