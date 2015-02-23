app.estatesView = Backbone.View.extend({
    el: $('#container'),
    template: _.template($("#estateTemplate").html()),
    render: function() {
        var that = this;
        this.collection = new app.realEstatesList();
        this.collection.fetch({
            success: function() {
                $(that.el).html(that.template({
                    estates: that.collection.toJSON()[0].response
                }));
            },
            error: function() {
                console.log('Failed to fetch!');
            }

        });
        return this;
    }
});