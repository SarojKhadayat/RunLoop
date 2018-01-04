import Component from '@ember/component';

export default Component.extend({
    actions:{
        triggerQueues:function(){
            function logFour() {
                console.log('processing: task #4');
              }
              
              console.log('before Ember.run');
              Ember.run(function(){
                Ember.run.schedule('actions', function task1(){
                  console.log('processing: task #1');
                });
              
                Ember.run.schedule('afterRender', function task3(){
                  console.log('processing: task #3');
                });
              
                Ember.run.scheduleOnce('afterRender', logFour);
                Ember.run.scheduleOnce('afterRender', logFour);
                Ember.run.scheduleOnce('afterRender', logFour);
              
                Ember.run.schedule('render', function task2() {
                  console.log('processing: task #2');
                });
              
                console.log('end of callback');
              });
              
              console.log('after Ember.run');
        }
    }
});
