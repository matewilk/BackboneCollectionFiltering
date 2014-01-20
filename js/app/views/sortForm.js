/**
 * Created by mw on 1/12/14.
 */

//views/sortForm

define(["backbone"], function(Backbone){

    var sortFormView = Backbone.View.extend({
        el: '#sortFormContainer',

        events:{
            'click #sort': 'sortCollection'
        },

        sortCollection: function( e ) {
            e.preventDefault();

            var formData = {};

            //$( '#sortHotel div[id="elements"]' ).children( 'input select' ).each( function( i, el ) {
                $('#sortCollection input, #sortCollection select').each( function( i, el ) {
                if( $( el ).val() != '' )
                {
                    formData[ el.id ] = $( el ).val();
                }
            });

            this.model.set(formData);
            this.model.trigger('sort', formData);

        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return sortFormView;

});