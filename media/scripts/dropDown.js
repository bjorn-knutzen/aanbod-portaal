
dropDown = function () {

	function initialize() {
		const dropdownButton = document.querySelector(".dropdown-button");
		const dropdownMenu = document.querySelector(".dropdown-menu");

		dropdownButton.addEventListener("click", ()=>{
			dropdownMenu.classList.toggle("showMenu");
		});
	}	
	
	return {
        initialize: initialize
    };
}();
