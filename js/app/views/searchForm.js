/**
 * Created by mw on 1/12/14.
 */

//views/searchForm

define(["backbone"], function(Backbone){

    var searchFormView = Backbone.View.extend({
        el: '#searchFormContainer',

        events:{
            'click #search': 'searchCollection'
        },

        searchCollection: function( e ) {
            e.preventDefault();

            var formData = {};

            $( '#searchCollection div' ).children( 'input, select' ).each( function( i, el ) {
                if( $( el ).val() != '' )
                {
                    formData[ el.id ] = $( el ).val();
                }
            });

            this.model.set(formData);
            this.model.trigger('search', formData);

        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return searchFormView;

});