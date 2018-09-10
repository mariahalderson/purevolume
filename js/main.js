var hamburger = document.querySelector("#hamburgermenu"),
	topbar = document.querySelector(".bar1"),
	midbar = document.querySelector(".bar2"),
	lowbar = document.querySelector(".bar3"),
	nav = document.querySelector("#navmenu"),
	logo = document.querySelector("#logospace img"),
	searchbutton = document.querySelector("#searchbar img"),
	searchbar = document.querySelector("#search"),
	dots = document.querySelectorAll(".bullet"),
	galleries = document.querySelectorAll(".galleryImage img");


	function chgLogo(){
		//white logo on dark nav bckgd
	 	if(logo.classList.contains("open")){

	 		logo.src="images/logo-light.png";

	 	}else{
	 		//keep white logo until nav slides out of view
	 		setTimeout(function(){logo.src="images/logo-gradient.png";}, 350);
	 		
	 	}
	}


	
	 hamburger.addEventListener('click', function (){
	 	//toggle rotating transitions when open/closing mobile menu
	 	 topbar.classList.toggle("change-bar1");
	 	 midbar.classList.toggle("change-bar2");
	 	 lowbar.classList.toggle("change-bar3");

	 	 //nav.style.display = "block";
	 	 nav.classList.toggle("change-nav");
	 	 nav.classList.toggle("before-nav");

	 	 //hide gallery
	 	galleries.forEach(gallery=>gallery.classList.toggle("hide"));
	 	dots.forEach(dot=>dot.classList.toggle("hide"));

	 	logo.classList.toggle("open");

	 	chgLogo();


	});

	 searchbutton.addEventListener('click', function(){
	 	//toggle search bar on/off
	 	searchbar.classList.toggle("hide");
	 });
