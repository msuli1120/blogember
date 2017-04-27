import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
        posts: this.store.findAll('post'),
        reviews: this.store.findAll('review')
      });
  },

  actions: {
    save(params){
      var newPost = this.store.createRecord('post',params);
      newPost.save();
      this.transitionTo('index');
    },
    delete(post){
      post.destroyRecord();
      this.transitionTo('index');
    },
    update(post,params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    saveReview(params){
      var newReview = this.store.createRecord('review', params);
      var post = params.post;
      post.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return post.save();
      });
      this.transitionTo('index');
    },
  },
});
