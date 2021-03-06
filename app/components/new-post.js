import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post){
      if(confirm('Are you sure you want to delete this post?')){
        this.sendAction('delete', post);
      }
    },
    update(post,params){
      this.sendAction('update',post,params);
    },
    saveReview(params){
      this.sendAction('saveReview',params);
    }
  },
});
