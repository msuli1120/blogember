import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    showForm(){
      this.set('updateForm',true);
    },
    confirm(post){
      var date = new Date();
      var time = date.toLocaleString();
      var params = {
        title: this.get('posttitle'),
        description: this.get('postdescription'),
        picture: this.get('postpicture'),
        time: time
      };
      this.set('updateForm', false);
      this.sendAction('update',post,params);
    }
  }
});
