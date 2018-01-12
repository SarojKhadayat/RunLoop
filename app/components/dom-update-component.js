import Component from '@ember/component';
import Ember  from 'ember';
import { run } from '@ember/runloop';
import Object from '@ember/object';
const Person = Object.extend({
    firstName:"hello",
    lastName:"world",       
    fullName:Ember.computed("firstName","lastName",function(){          
        return this.get('firstName') + ' ' + this.get('lastName')             
     }),
     newFullName:Ember.observer("firstName","lastName",function(){          
        console.log('observer executing');
     }),   
  });
export default Component.extend({        
    person: Person.create(),
    shouldShowComponent:true,
    actions:{
        setValues(){              
            this.person.set("firstName","Tom");
                // {{firstName}} and {{fullName}} are updated
            this.person.set("lastName","Cruise");       
                // {{lastName}} and {{fullName}} are updated     
            console.log(run.queues);
            },
        // showOrHide(){
        //     this.toggleProperty('shouldShowComponent');
        // }
        showOrHide(){
            this.set('shouldShowComponent',true);
            this.set('shouldShowComponent',false);
            this.set('shouldShowComponent',true);
            this.set('shouldShowComponent',false);
            // this.set('shouldShowComponent',true);
        //     run.schedule('afterRender',this,()=>{
        //     this.set('shouldShowComponent',false)
        // });           
        }
        // showOrHide(){
        //     run(()=>{
        //     this.set('shouldShowComponent',true);
        //     });
        //     run(()=>{
        //     this.set('shouldShowComponent',false);
        //     });
        //     run(()=>{
        //     this.set('shouldShowComponent',true);
        //     });
        //     run(()=>{
        //     this.set('shouldShowComponent',false);
        //     });
        //     run(()=>{
        //     this.set('shouldShowComponent',true);
        //     });
        //     run(()=>{
        //     this.set('shouldShowComponent',true);  
        //     });              
        // }
            // setValues(){
            //     this.person.set("firstName","Tom");
            //     this.person.set("lastName","Cruise");
            //     this.person.set("firstName","Test");
            //     this.person.set("lastName","Hello");
            //     this.person.set("firstName","hello");
            //     this.person.set("lastName","world");
            // }
         }
});
