import Component from '@ember/component';
import { run } from '@ember/runloop';
const NON_NUMERIC=/[^0-9.]/gi;
export default Component.extend({
    result:null,
    refreshModel:null,
    count:0,
    init(){
        this._refreshModel();
        this._super(...arguments);
    },
    willDestroyElement(){
        console.log('third-party-component- destroyed');
        // var refreshModel = this.get('refreshModel');
        // Ember.run.cancel(refreshModel);
    },
    
    checkNonNumeric:function(target){
        target.value=target.value.replace(NON_NUMERIC,'');
    },
    _refreshModel(){
     var refreshModel= run.later(()=>{
          console.log('refreshing...')
          let res= 'data-'+this.get('count');
          this.set('count',this.get('count')+1);
          this.set('result',res);
          run.schedule('afterRender',()=>{
              this._refreshModel();
          });
      },5000);  
      this.set('refreshModel',refreshModel);
    },
    actions:{
        cancelRefreshing:function(){
            let refreshModel=this.get('refreshModel');
            run.cancel(refreshModel);
        },
        showDifference:function(){
            
        }
    }
});
