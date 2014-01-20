/**
 * Created by mw on 1/12/14.
 */

define(["backbone", "jquery", "app/views/hotels"], function(Backbone, $, HotelsView){

    var hotels = [
        {
            "Distance":1.7640740806812176,
            "EstablishmentId":118164,
            "EstablishmentType":"Hotel",
            "EstablishmentTypeId":1,
            "ImageUrl":"http://static.travelrepublic.co.uk/EstabImages/Normal/2/3524/54938/757993/118164/1866519975.jpg",
            "Location":"Paris",
            "MinCost":1687.71,
            "Name":"Hotel Brighton",
            "StarType":1,
            "Stars":4,
            "TrpRating":463414,
            "UserRating":8.5,
            "UserRatingCount":10
        },
        {
            "Distance":3.7223105685271021,
            "EstablishmentId":747428,
            "EstablishmentType":"Hotel",
            "EstablishmentTypeId":1,
            "ImageUrl":"http://static.travelrepublic.co.uk/EstabImages/Normal/128/5461/75985/258340/3045699/1987408879.jpg",
            "Location":"Paris",
            "MinCost":1924.51,
            "Name":"Champlain Hotel",
            "StarType":1,
            "Stars":3,
            "TrpRating":463253,
            "UserRating":7.7,
            "UserRatingCount":70
        },
        {
            "Distance":2.1405503551636849,
            "EstablishmentId":117988,
            "EstablishmentType":"Hotel",
            "EstablishmentTypeId":1,
            "ImageUrl":"http://static.travelrepublic.co.uk/EstabImages/Normal/97/6318/112092/346694/2449162/1307759166.jpg",
            "Location":"Paris",
            "MinCost":1337.215,
            "Name":"Opera Cadet",
            "StarType":1,
            "Stars":4,
            "TrpRating":461204,
            "UserRating":8.5,
            "UserRatingCount":38
        }
    ];

    var App = new HotelsView();

    return App;
});
