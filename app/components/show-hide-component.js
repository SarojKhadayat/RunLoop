import Component from '@ember/component';

export default Component.extend({
    didRender(){
        console.log('show hide component rendered');
    },  
    willDestroyElement(){
        console.log('I am destroyed');
    }
});

