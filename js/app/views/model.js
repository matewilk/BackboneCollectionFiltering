/**
 * Created by mw on 1/12/14.
 */

//views/hotel

define(["backbone", "jquery", "underscore"], function(Backbone, $, _){

    var ModelView = Backbone.View.extend({
        tagName: 'div',
        className: 'modelContainer',
        template: _.template($("#modelTemplate").html()),

        events: {
            'click .view' : 'viewModelDetails'
        },

        render: function()
        {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    return ModelView;

});
