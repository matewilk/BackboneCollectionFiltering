/**
 * Created by mw on 1/11/14.
 */

//models/hotel

define(["backbone"], function(Backbone){

    var Model = Backbone.Model.extend({
        defaults: {
            Distance: null,
            EstablishmentId: null,
            EstablishmentType: "Unknown",
            EstablishmentTypeId: null,
            ImageUrl: "",
            Location: "Not defined",
            MinCost: null,
            Name: "Unknown",
            StarType: null,
            Stars: 0,
            TrpRating: null,
            UserRating: 0,
            UserRatingCount: 0
        }
    })
    return Model;
})
