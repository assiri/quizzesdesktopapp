import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
  saveRecord:function(){
    alert(this.get('controller.title'));
    var model=this.store.createRecord('quiz',{matrixid : 169 ,isCompleted :false,title:this.get('controller.title')});
    var self=this;
    model.save().then(function(){
      self.transitionTo('quizzes');
    });

  }
  }
});
