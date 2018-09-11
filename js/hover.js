var navblock = document.querySelector("#navhighlight"),
	listitems = Array.from(document.querySelectorAll("#navlist li a"));



function resettext(){

	listitems.forEach(item=>item.style.color = "#283744");

}


function popculture(){
	resettext();

		navblock.style.width = "132px";
		navblock.style.transform = "translateX(150px)";	

		listitems[1].style.color = "#fff";
}




function entertainment(){
	resettext();

		navblock.style.width = "164px";
		navblock.style.transform = "translateX(352px)";

		listitems[2].style.color = "#fff";
}




function music(){
	resettext();

		navblock.style.width = "67px";
		navblock.style.transform = "translateX(455px)";

		listitems[3].style.color = "#fff";
}


entertainment();







listitems[1].addEventListener('mouseenter', popculture);
listitems[2].addEventListener('mouseenter', entertainment);
listitems[3].addEventListener('mouseenter', music);

listitems.forEach(item=>item.addEventListener('mouseout', entertainment));