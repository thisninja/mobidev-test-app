app.router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'estates/:id': 'estateDetails'
	},
    home: function () {
        app.estatesView = new app.estatesView();
        app.estatesView.render();
    }
});
