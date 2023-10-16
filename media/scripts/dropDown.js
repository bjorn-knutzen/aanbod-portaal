dropDown = function () {
	
	function initialize() {
		
		$('.dropdown-button').on('click', function(e) {
			$('.dropdown-menu').toggleClass("show");
			e.preventDefault();
		});

		$('.filter-button').click(function(){
			$('.slide-in-component').toggleClass('show');
		});		
	}	
	return {
        initialize: initialize
    };
}();
