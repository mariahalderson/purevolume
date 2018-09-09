var hamburger = document.querySelector("#hamburgermenu"),
	topbar = document.querySelector(".bar1"),
	midbar = document.querySelector(".bar2"),
	lowbar = document.querySelector(".bar3"),
	nav = document.querySelector("#navmenu"),
	logo = document.querySelector("#logospace img");


	 hamburger.addEventListener('click', function (){
	 	//toggle rotating transitions when open/closing mobile menu
	 	 topbar.classList.toggle("change-bar1");
	 	 midbar.classList.toggle("change-bar2");
	 	 lowbar.classList.toggle("change-bar3");

	 	 //nav.style.display = "block";
	 	 nav.classList.toggle("change-nav");
	 	 nav.classList.toggle("before-nav");

	});
