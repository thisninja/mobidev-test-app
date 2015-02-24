app.singleEstateView = Backbone.View.extend({
    el: $('#container'),
    events: {
        'click .btn-back': function() {
            window.history.back();
            return false;
        }
    },
    template: _.template($("#estateTemplate").html()),
    render: function() {
        var that = this;
        this.collection = new app.realEstatesList();
        this.collection.fetch({
            success: function() {
                $(that.el).html(that.template({
                    estate: that.collection.toJSON()[0].response.listings[that.id]
                }));
            },
            error: function() {
                console.log('Failed to fetch!');
            }

        });
        return this;
    }
});