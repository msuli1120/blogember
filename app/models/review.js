import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
