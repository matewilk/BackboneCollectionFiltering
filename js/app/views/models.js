/**
 * Created by mw on 1/12/14.
 */

//views/models

define(["backbone", "jquery", "underscore", "app/collections/collection", "app/views/model", "app/views/searchForm", "app/views/sortForm", "app/models/filter"], function(Backbone, $, _, Collection, ModelView, SearchForm, SortForm, FilterModel){

    var MainView = Backbone.View.extend({
        el: "#collection",

        initialize: function()
        {
            var self = this;
            this.collection = new Collection();
            this.collection.fetch({
                error: function () {
                    alert("error!!");
                },
                success: function () {
                    console.log('load content success');
                    var filter = new FilterModel(self.collection);
                    var serachForm = new SearchForm({
                        model: filter
                    });
                    var sortForm = new SortForm({
                        model: filter
                    });
                    self.collection = filter.filtered;
                    self.listenTo(self.collection, 'reset', self.render);
                    //self.listenTo(self.collection, 'sort', self.render);
                    self.render();
                }
            });
        },

        render: function()
        {
            this.$el.html('');
            this.collection.each(function(model, index){
                this.renderModel(model)
            }, this);
        },

        renderModel: function(model)
        {
            var ModelView = new ModelView({
                model: model
            });
            this.$el.append(ModelView.render().el);
        }
    });

    return MainView;

})