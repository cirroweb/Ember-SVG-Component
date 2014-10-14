import Ember from 'ember';
import DS from "ember-data";

var SPRITE_URL = '/assets/icons/icon-sprite.json';

export default DS.Adapter.extend({

  findAll: function(store, type) {
    return Ember.$.ajax({
      dataType: "json",
      url: this.buildURL(type.typeKey),
    });
  },

  buildURL: function() {
    return SPRITE_URL;
  }

});