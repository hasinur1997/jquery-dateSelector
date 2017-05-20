(function ( $ ) {
 
    $.fn.dateSelector = function( options ) {
	
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            startDate: ""
        }, options );
		
		var date = new Date();
		
		var year = date.getFullYear();
 
        for(var i = settings.startDate; i <= year; i++){
			
			$(this).append('<option value="'+i+'">'+i+'</option>');
		}
       
 
    };
 
}( jQuery ));




/*var settings = $.extends({
			startDate = ""
			
		},options);
		
		var date = new Date();
		
		var year = date.getFullYear();
		
		for(var i = settings.startDate; i <= year; i++){
			
			$(this).append('<option value="'+i+'">'+i+'</option>');
		}*/