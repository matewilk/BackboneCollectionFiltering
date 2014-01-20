/**
 * Created by mw on 1/12/14.
 */

require.config({
    paths: {
        "jquery": "libs/jquery/jquery",
        "underscore": "libs/underscore-amd/underscore",
        "backbone": "libs/backbone-amd/backbone"
    },
//    shim : {
//        "backbone" : {
//            deps: ["jquery", "underscore"],
//            export: "Backbone"
//        }
//    },
    waitSeconds: 10
});

require(['jquery', 'underscore', 'backbone', 'app'], function($, _, backbone, App){
    //App;
});

