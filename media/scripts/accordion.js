accordion = function () {
	console.log('accordion');
	function initialize() {
		console.log("initialize accordion");
		const accordions = document.querySelectorAll(".accordion-section");

		const openAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion-section-content");
			accordion.classList.add("accordion__active");
			content.style.maxHeight = content.scrollHeight + "px";
			console.log("click");
		};

		const closeAccordion = (accordion) => {
			const content = accordion.querySelector(".accordion-section-content");
			accordion.classList.remove("accordion__active");
			content.style.maxHeight = null;
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
		});
	}
	
	return {
        initialize: initialize
    };
}();

