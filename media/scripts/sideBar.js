
sideBar = function () {
	console.log('sideBar');
	function initialize() {
		console.log('initialize sideBar');

		const filterButton = document.querySelector(".filter-button");
		const slideInComponent = document.querySelector(".slide-in-component");

		filterButton.addEventListener("click", ()=>{
			slideInComponent.classList.toggle("showFilters");
		});
	}	
	return {
        initialize: initialize
    };
}();
