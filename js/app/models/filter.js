/**
 * Created by mw on 1/12/14.
 */

//models/filter

define(["backbone", "jquery"], function(Backbone, $){

    var Filter = Backbone.Model.extend({

        initialize: function(collection) {

            this.collection = collection;
            this.filtered = new Backbone.Collection(collection.models);

            this.on('search', this.filter);
            this.on('sort', this.sort);
        },

        filter: function(params) {
            var filteredModels;

            if($.isEmptyObject(params))
            {
                filteredModels = this.collection.models;
            }
            else
            {
                var self = this;
                filteredModels = this.collection.filter(function(model){

                        var booleans = [];
                        for(var i in params)
                        {
                            self.validateAttribute(model, booleans, i, params);
                        }

                        return !/false/i.test(booleans.join(''));

                });
            }

            if(!!this.filtered.comparator) this.filtered.sort();
            this.filtered.reset(filteredModels);
        },

        validateAttribute: function(model, booleans, lookup, parms) {
            switch(lookup){
                case "Name":
                    booleans.push(model.get(lookup).indexOf(parms[lookup]) !== -1);
                    break;
                case "MinCost":
                    booleans.push(model.get(lookup) <= parms[lookup]);
                    break;
                default:
                    booleans.push(model.get(lookup) == parms[lookup]);
            }

            return booleans;
        },

        sort: function(params) {
            this.filtered.comparator = params.select
            this.filtered.sort();
            this.filtered.reset(this.filtered.models)
        }
    });

    return Filter;

});