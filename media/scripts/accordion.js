accordion = function () {
	

	function initialize() {
		console.log('initialize accordion');
		var $accordionComponent = $('.accordion-component');

		close_accordion_section = function(){
			$('.accordion-section-title').removeClass('active');
			$('.accordion-section-content').slideUp(300).removeClass('open');
		} 
		$('.accordion-section-title').click(function(e) {
			var currentAttrValue = $(this).attr('href'); 
			if($(e.target).is('.active')) {
				close_accordion_section();
			}else {
				close_accordion_section();

				$(this).addClass('active');

				$('.accordion-component ' + currentAttrValue).slideDown(300).addClass('open'); 
			} 
			e.preventDefault();
		});		
	}
	
	return {
        initialize: initialize
    };
}();

