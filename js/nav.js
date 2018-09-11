var navblock = document.querySelector("#navhighlight"),
	items = Array.from(document.querySelectorAll("#navlist li a")),
	last_pos = 0,
	popheight = document.querySelector("#popculture").offsetHeight,
	mheight = document.querySelector("#music").offsetHeight,
	eheight = document.querySelector("#entertainment").offsetHeight,
	heroheight = document.querySelector("#hero").offsetHeight;

console.log(items[2].innerHTML);
	
	function moveblock(){

		let current_pos = window.scrollY;
		console.log(current_pos);

	if(current_pos>0){
		resettext();

		navblock.style.width = "2px";
		navblock.style.transform = "translateX(0px)";

	
	}if(current_pos > heroheight){
		resettext();

		navblock.style.width = "132px";
		navblock.style.transform = "translateX(150px)";	

		items[1].style.color = "#fff";

	}if(current_pos > heroheight + popheight){
		resettext();

		navblock.style.width = "164px";
		navblock.style.transform = "translateX(352px)";

		items[2].style.color = "#fff";
	}if(current_pos > heroheight + popheight + eheight){
		resettext();

		navblock.style.width = "67px";
		navblock.style.transform = "translateX(455px)";

		items[3].style.color = "#fff";
	}
}

function resettext(){
	items.forEach(item=>item.style.color = "#283744");
}

window.addEventListener('scroll', moveblock, false);