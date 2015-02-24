app.router = Backbone.Router.extend({
	routes: {
		'': 'home',
        'estates': 'home',
		'estates/:id': 'estateDetails'
	},
    home: function () {
        var h = new app.estatesView();
        h.render();
    },
    estateDetails: function(id) {
        var e = new app.singleEstateView({id: id});
        e.render();    
    }
});
