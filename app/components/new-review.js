import Ember from 'ember';

export default Ember.Component.extend({
  reviewform: false,
  actions: {
    showReviewForm(){
      this.set('reviewform', true);
    },
    saveReview(){
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        post: this.get('post')
      };
      this.set('reviewform',false);
      this.sendAction('saveReview', params);
      this.set('author','');
      this.set('rating','');
      this.set('content','');
    }
  }
});
