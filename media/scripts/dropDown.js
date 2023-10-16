
dropDown = function () {
	console.log('initialize dropDown');
	function initialize() {
		console.log('initialize dropDown');
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
