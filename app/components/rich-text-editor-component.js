import Component from '@ember/component';
import App from '../app'

export default Component.extend({
    initializeTinyMCE: Ember.on('didInsertElement', function() {
        tinymce.init({
          selector: '#' + this.$().prop('id'),
          setup: Ember.run.bind(this, this.setupEditor)
        });
      }),
    
      setupEditor: function(editor) {
        this.set('editor', editor);
        editor.on('change', function() {
          console.log('content changed!');
        });
      }
});