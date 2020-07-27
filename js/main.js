$( document ).ready( function () {
    $( '.toggle' ).on( 'click', function () {
        $( '.menu ul' )[0].classList.toggle( 'active' );
    } )
});
