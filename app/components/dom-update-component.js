import Component from '@ember/component';
import Ember  from 'ember';
export default Component.extend({    
        firstName:"hello",
        lastName:"world",       
        fullName:Ember.computed("firstName","lastName",function(){          
            return this.get('firstName') + ' ' + this.get('lastName')             
         }),
         actions:{
            setValues(){              
                this.set("firstName","Saroj");
                this.set("lastName","Khadayat");
                this.set("firstName","suman");
                this.set("lastName","adhikari");
            }

            // setValues(){
            //     this.set("firstName","Saroj");
            //     this.set("lastName","Khadayat");
            //     this.set("firstName","Test");
            //     this.set("lastName","Hello");
            //     this.set("firstName","hello");
            //     this.set("lastName","world");
            // }
         }
});
