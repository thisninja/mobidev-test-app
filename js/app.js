var app = app || {};
$(document).ready(function () {
    var router = new app.router();
    //router.navigate('', true);
    Backbone.history.start({root: ""});   
});