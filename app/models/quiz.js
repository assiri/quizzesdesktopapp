import DS from 'ember-data';
import Ember from 'ember';
export default DS.Model.extend({
   matrixid: DS.attr(),
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean',{defaultValue: false}),
  qtitle:Ember.computed('title',function(){
    return this.get('title').split(':')[0];
  })
});
