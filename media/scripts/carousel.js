carousel = function () {
	
	function initialize() {
		
		var $carousel = $('#carousel_ul');
		var $carouselListItems = $carousel.find('li');
		
		$('#next_scroll').click(function(){
			var item_height = $('#carousel_ul li').outerHeight();

			$('#carousel_ul:not(:animated )').animate({'top' : -item_height},500,function(){    
				$('#carousel_ul li:last').after($('#carousel_ul li:first')); 
				$('#carousel_ul').css({'top' : '0'});
			}); 
		});		
		
		$('#prev_scroll').click(function(){
			var item_height = $('#carousel_ul li').outerHeight();

			$('#carousel_ul:not(:animated )').animate({'top' : item_height},500,function(){    
				$('#carousel_ul li:first').before($('#carousel_ul li:last')); 
				$('#carousel_ul').css({'top' : '0'});
			});
		});	
		
	}	
	return {
        initialize: initialize
    };
}();

