var vid = document.querySelector("video"),
	controls = document.querySelector("#controls"),
	playbtn = document.querySelector("#play"),
	pausebtn = document.querySelector("#pause"),
	stopbtn = document.querySelector("#stop"),
	replaybtn = document.querySelector("#replay");





// media query event handler
if (matchMedia) {
const mq = window.matchMedia("(min-width: 1000px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {
	vid.src="video/purevolumevidDESKTOP.mp4";
} else {
	vid.src="video/purevolumevidMOBILE.mp4";
}
}



//change video source based on screen width
// function pickvid(){

// 	var winwidth = window.innerWidth;
// 	console.log(winwidth);
// 	if(winwidth < 1000){
// 		vid.src="video/purevolumevidMOBILE.mp4";
// 	}else{
// 		vid.src="video/purevolumevidDESKTOP.mp4";
// 	}
// }

//function videosize(){
// if(window.matchMedia("(min-width: 1000px)").matches){
// 	vid.src = "video/purevolumevidDESKTOP.mp4";
// }else{
// 	vid.src = "video/purevolumevidMOBILE.mp4";
// }
//}

//videosize();

//choose correct video size
//pickvid();


//change video src if window resizes
//window.addEventListener('resize', pickvid);



//keep logo showing at end of video
vid.addEventListener('ended', function(){
	this.currentTime = 17;
}, false);



//show controls on hover
vid.addEventListener('mouseenter', function(){
	controls.style.opacity="1";
});

controls.addEventListener('mouseenter', function(){
	controls.style.opacity="1";
});

vid.addEventListener('mouseout', function(){
	controls.style.opacity="0";
});





//button functionalities
playbtn.addEventListener('click', function(){
	vid.play();
});

pausebtn.addEventListener('click', function(){
	vid.pause();
});

stopbtn.addEventListener('click', function(){
	vid.pause();
	vid.currentTime = 0;
});

replaybtn.addEventListener('click', function(){
	vid.currentTime = 0;
	vid.play();
});