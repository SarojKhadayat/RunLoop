import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  textValue:null,
  newTextValue:null,
  setValue:function(){
    this.set('newTextValue',this.get('textValue'));
    var stringLength=this.get('newTextValue.length');
    console.log(stringLength);
  },
    actions:{
        triggerQueues:function(){
            function logFour() {
                console.log('processing: scheduled once');
              }
              
              console.log('before Ember.run');
              Ember.run(function(){
                Ember.run.schedule('actions', function taskAction(){
                  console.log('processing: actions');
                });
              
                Ember.run.schedule('afterRender', function taskAfterRender(){
                  console.log('processing: afterRender');
                });
                Ember.run.schedule('sync',function taskSync(){
                  console.log('Processing: sync')
                });
                Ember.run.scheduleOnce('afterRender', logFour);
                Ember.run.scheduleOnce('afterRender', logFour);
                Ember.run.scheduleOnce('afterRender', logFour);
                Ember.run.schedule('routerTransitions',function taskRoute(){
                  console.log('Processing: Router Transition')
                });
                Ember.run.schedule('destroy',function taskDestroy(){
                  console.log('Processing: destroy')
                });
                Ember.run.schedule('render', function taskRender() {
                  console.log('processing: render');
                });
              
                console.log('end of callback');
              });
              
              console.log('after Ember.run');
        },
        routeToComponent:function(routeString){
          Ember.run(function(){
            Ember.run.schedule('routerTransitions',function route(){

            });
          })
        },
         triggerKeyUp:function(){         
         run.debounce(this,"setValue",5000);   
        // run.throttle(this,"setValue",5000);  
        }
    }
});
