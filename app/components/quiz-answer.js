import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
   title:null,
  id:null,
  mdl:null,
  //result:false,
    qiateam:{},
    ressum:function (){
    var sum=0;
    var entry=this.qiateam[this.get('id')];
        if (entry.ans< 0){entry.ans=0;}
       sum += parseFloat(entry.ans);
    //});
    return parseFloat(sum);
  },
  didInsertElement : function() {
    this._super(this, arguments);
        Ember.run.scheduleOnce('afterRender', this, this.answer);
      },
    answer:Ember.observer('id', function() {
      var self = this;
      var id=this.get('id');
      this.$('#content').html('');
        var title=this.get('title');
        try {
        var q=title.split(':')[0];
        var ans=title.split(':').slice(1),s,ans2="",cur=[];
         for (var i=0; i<ans.length; i++) {
          s=ans[i];
        if (!s.match(/\$/))	{
          ans2 +="<li class='cls0'>"+s+"</li>";
          } else{
             s=s.replace(/\$/,'');
          ans2 +="<li class='cls1'>"+s+"</li>";
          cur.push(i);
           }
         } // end i
        self.qiateam[id]={cur:cur,ans:0};

        var html="<p id='pq'>"+q+"</p><ul class='qans' qid='"+id+"'>"+ans2+"</ul>";
        self.$('#content').html(  self.$('#content').html()+html);
      //  i ++;
      } catch (e) {}

    self.$("ul.qans li").on("mouseenter mouseleave",function(){$(this).not('.c').toggleClass("highlighted");
      self.$('#msg').css('display','none');});
    self.$("ul.qans li").on("click" ,function(){
        $(this).removeClass("highlighted").addClass("c").off( "mouseenter mouseleave click");
    var qid=self.$('ul.qans').attr('qid');
    var cur=self.qiateam[qid].cur;
        //alert(qid);
    var liinex=$(this).index();
     if (cur.indexOf(liinex)===-1){
        self.qiateam[qid].ans -=(10/ self.qiateam[qid].cur.length);
         if(self.qiateam[qid].ans <0 ){ self.qiateam[qid].ans=0;}
     $(this).removeClass('err ok').addClass('err');
     } else {
          self.qiateam[qid].ans +=(10/ self.qiateam[qid].cur.length);
     $(this).removeClass('err ok').addClass('ok');
     }
    }); // click
    //this.$().on('someEvent', this.myEventHandler);
    self.$('#result').css('display','inline');
    self.$("#result").on("click",function() {
      if(!self.$("ul.qans li").hasClass('c')){
       self.$('#msg').html('اختر اجابة').css('display','block');
      return;
      }
     self.$('#msg').html('لقد حصلت على '+self.ressum().toString()).css('display','block');
     self.$('#result').css('display','none');
     var model=self.get('mdl');
        model.set('isCompleted',true);
        model.save();
     });   // end #result click
   //} // has result
   })
});
