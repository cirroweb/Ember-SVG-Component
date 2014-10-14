import Ember from "ember";

export default Ember.Component.extend({
	tagName: 'span',
  attributeBindings:[ 'name:data-icon' ],  
  icons: function () {
    var self = this;
    var store = this.get('targetObject.store');

    return store.filter('icon', function (record) {
      return (record.get('id') === self.get('name'));
    });

  }.property()
});