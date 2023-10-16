
dropDown = function () {
	function initialize() {

		const actionButton = document.querySelector(".dropdown-button");
		const elementToShow = document.querySelector(".dropdown-menu");

		actionButton.addEventListener("click", ()=>{
			elementToShow.classList.toggle("show");
		});
	}	
	return {
        initialize: initialize
    };
}();
