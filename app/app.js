import Ember from 'ember';
import DS from "ember-data";
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'svg-component', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'svg-component');

export default App;
