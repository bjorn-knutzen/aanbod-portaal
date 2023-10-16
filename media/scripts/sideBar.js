
sideBar = function () {
	
	function initialize() {
		const elementClicked = document.querySelector(".filter-button");
		const elementYouWantToShow = document.querySelector(".slide-in-component");

		elementClicked.addEventListener("click", ()=>{
			elementYouWantToShow.classList.toggle("show");
		});
	}	
	return {
        initialize: initialize
    };
}();
