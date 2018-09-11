var navblock = document.querySelector("#navhighlight"),
	items = Array.from(document.querySelectorAll("#navlist li a")),
	popheight = document.querySelector("#popculture").offsetHeight,
	mheight = document.querySelector("#music").offsetHeight,
	eheight = document.querySelector("#entertainment").offsetHeight,
	heroheight = document.querySelector("#hero").offsetHeight;




function start(){
	resettext();

		navblock.style.width = "2px";
		navblock.style.transform = "translateX(0px)";
}




function popculture(){
	resettext();

		navblock.style.width = "132px";
		navblock.style.transform = "translateX(150px)";	

		items[1].style.color = "#fff";
}




function entertainment(){
	resettext();

		navblock.style.width = "164px";
		navblock.style.transform = "translateX(352px)";

		items[2].style.color = "#fff";
}




function music(){
	resettext();

		navblock.style.width = "67px";
		navblock.style.transform = "translateX(455px)";

		items[3].style.color = "#fff";
}




function resettext(){

	items.forEach(item=>item.style.color = "#283744");

}



	
	function moveblock(){

		let current_pos = window.scrollY;
		console.log(current_pos);

	if(current_pos< heroheight){

		start();

	}if(current_pos > heroheight){
		
		popculture();

	}if(current_pos > heroheight + popheight){
		
		entertainment();

	}if(current_pos > heroheight + popheight + eheight){
		
		music();
	}
}


window.addEventListener('scroll', moveblock, false);

items[1].addEventListener('mouseenter', popculture);
items[2].addEventListener('mouseenter', entertainment);
items[3].addEventListener('mouseenter', music);

items.forEach(item=>item.addEventListener('mouseout', moveblock));