
dropDown = function () {
	function initialize() {

		$('.dropdown-button').on('click', function(e) {
			$('.dropdown-menu').toggleClass("show");
			e.preventDefault();
		});
	}	
	return {
        initialize: initialize
    };
}();
