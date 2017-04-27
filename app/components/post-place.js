import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    post(){
      var date = new Date();
      var time = date.toLocaleString();
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        picture: this.get('picture'),
        time: time
      };
      this.sendAction('save', params);
      this.set('title', '');
      this.set('description', '');
      this.set('picture', '');
    },
  }
});
