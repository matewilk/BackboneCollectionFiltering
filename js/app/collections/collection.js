/**
 * Created by mw on 1/11/14.
 */

//collections/hotels

define(["backbone", "app/models/model"], function(Backbone, Model){

    var Collection = Backbone.Collection.extend({
        model: Model,

        url: 'collection.json',

        parse: function(response){
            //parse json file if necessary
            return response;
        },

        initialize: function()
        {

        }

//        sync: function(options) {
//            var params = _.extend({
//                type: 'GET',
//                dataType: 'jsonp',
//                url: 'http://www.scriptdealer.pl/test/hotels.json',
//                processData: false
//            }, options);
//
//            return $.ajax(params);
//
//        }

    });

    return Collection;
})