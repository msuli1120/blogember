import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  picture: DS.attr(),
  time: DS.attr(),
  reviews: DS.hasMany('review',{ async: true })
});
