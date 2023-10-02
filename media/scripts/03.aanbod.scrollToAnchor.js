var aanbod = aanbod || {};

aanbod.scrollToAnchor = function () {
	
	function initialize() {		
				
		function scrollToAnchor(aid){
			var aTag = $("a[name='"+ aid +"']");
			$('html,body').animate({scrollTop: aTag.offset().top},'slow');
		}

		$(".accordion-section-title").click(function() {
		   scrollToAnchor('accordion-content');
		});		
	}	
	return {
        initialize: initialize
    };
}();

