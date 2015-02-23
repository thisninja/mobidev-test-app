app.realEstateItem = Backbone.Model.extend({
    defaults: {
        thumb_url: '',
        price_formatted: '',
        title: ''
    }
});
app.realEstatesList = Backbone.Collection.extend({
    model: app.realEstateItem,
    url: 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds',
    parse: function(response) {
        console.log(response.response.listings);
        return response;
    },
    sync: function(method, model, options) {
        var self = this;
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: self.url,
            processData: false
        }, options);

        return $.ajax(params);
    }
});