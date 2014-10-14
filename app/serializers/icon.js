import DS from "ember-data";

export default DS.RESTSerializer.extend({  
  normalizePayload: function(payload) {

    var icons = [];

    for ( var icon in payload ) {
      icons.push({
        id:   icon.replace('.svg', ''),
        data:  payload[icon]
      });
    }

    return this._super({ icons: icons });
  }
});