export default {
	name: 'storeInComponents',
	after: 'store',
  initialize: function (container, application) {
    application.inject('component', 'store', 'store:main');
    container.lookup('store:main').findAll('icon');
  }
};