import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
   return this.store.query('quiz',{offset:params.offset,limit:params.limit}).then(function(quiz){
     return quiz;
   });
  },
    queryParams: {
      offset: { refreshModel: true}
    },
  setupController: function(controller, model) {
    this._super.apply(this, arguments); // Do not forget this call

    controller.set('total', model.get('meta.total'));
  }

});
