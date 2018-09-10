var images = Array.from(document.querySelectorAll(".galleryImage")),
	imageIndex = 0,
	bulletContainer = document.querySelector("#bullets"),
	bulletContent = "";


//populate x amount of bullets to match images in gallery
for(var i=0; i<images.length; i++){
	bulletContent += "<div class='bullet'></div>";
}

bulletContainer.innerHTML += bulletContent;
let bullets = Array.from(document.querySelectorAll(".bullet"));


//highlight first bullet
bullets[0].classList.add("active");
images[0].style.opacity = 1;


function findImg(e){
	//remove bullet highlight
	bullets.forEach(bullet => bullet.classList.remove("active"));
	images.forEach(image => image.style.opacity = 0);

	e.target.classList.add("active");
	imageIndex = bullets.findIndex(bullet => bullet.classList.contains("active"));

	console.log(imageIndex);

	images[imageIndex].style.opacity = 1;

}

bullets.forEach(bullet => bullet.addEventListener('click', findImg));