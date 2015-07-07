import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['offset', 'limit'],
  offset: 0,
  limit: 1,
  prevf:false,
  prevchg:Ember.observer('offset',function(){
    if(this.get('offset')>=1)
    {
      this.set('prevf',true);
    } else {
      this.set('prevf',false);
    }
  }),
  nextf:true,
  nextchg:Ember.observer('offset',function(){
    if(this.get('offset')<=this.get('total')){
      this.set('nextf',true);
    } else {
      this.set('nextf',false);
    }
  }),
  actions:
  {
   next:function (){
    this.set('offset', this.get('offset')+1);
  },
  prev:function (){
    this.set('offset', this.get('offset')-1);
  }
  }
});
