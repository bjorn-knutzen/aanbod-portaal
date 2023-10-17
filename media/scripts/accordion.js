accordion = function () {
	

	function initialize() {

		console.log('initialize accordion');

		const accordions = document.querySelectorAll(".accordion-section");

		const openAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion-section-content");
			accordion.classList.add("accordion__active");
			content.style.maxHeight = content.scrollHeight + "px";

			
			console.log('openAccordion');
		};

		const closeAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion-section-content");
			accordion.classList.remove("accordion__active");
			content.style.maxHeight = null;

			console.log('closeAccordion');
		};

		accordions.forEach((accordion) => {
			const intro = accordion.querySelector(".accordion-section-title");
			const content = accordion.querySelector(".accordion-section-content");

			intro.onclick = () => {
				if (content.style.maxHeight) {
					closeAccordion(accordion);
				} else {
					accordions.forEach((accordion) => closeAccordion(accordion));
					openAccordion(accordion);
				}
			};

			console.log('last code Accordion');
		});


		// var $accordionComponent = $('.accordion-component');

		// close_accordion_section = function(){
		// 	$('.accordion-section-title').removeClass('active');
		// 	$('.accordion-section-content').slideUp(300).removeClass('open');
		// } 
		// $('.accordion-section-title').click(function(e) {
		// 	var currentAttrValue = $(this).attr('href'); 
		// 	if($(e.target).is('.active')) {
		// 		close_accordion_section();
		// 	}else {
		// 		close_accordion_section();

		// 		$(this).addClass('active');

		// 		$('.accordion-component ' + currentAttrValue).slideDown(300).addClass('open'); 
		// 	} 
		// 	e.preventDefault();
		// });		
	}
	
	return {
        initialize: initialize
    };
}();

