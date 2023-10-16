
sideBar = function () {
	
	function initialize() {
		const actionButton = document.querySelector(".filter-button");
		const elementToShow = document.querySelector(".slide-in-component");

		actionButton.addEventListener("click", ()=>{
			elementToShow.classList.toggle("show");
		});
	}	
	return {
        initialize: initialize
    };
}();
