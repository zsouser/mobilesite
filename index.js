$( document ).on( "pageinit", "[data-role='page'].resume", function() {
	var page = "#" + $( this ).attr( "id" ),
	    // Get the filename of the next page that we stored in the data-next attribute
	    next = $( this ).jqmData( "next" ),
	    // Get the filename of the previous page that we stored in the data-prev attribute
	    prev = $( this ).jqmData( "prev" );
	// Check if we did set the data-next attribute
	if ( next ) {
	    //	    $.mobile.loadPage( next + ".html" );
	    $( document ).on( "swipeleft", page, function() {
		    $.mobile.changePage( next + ".html", { transition: "slide" });
		});
	}
	
	if ( prev ) {
	    //$.mobile.loadPage( prev + ".html" );
	    $( document ).on( "swiperight", page, function() {
		    $.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
		});
	}
	

    });