var heightText = document.querySelector("p"),
    knob = document.querySelector("#outerring"),
    last_pos = 0,
    ticking = false;



//find scroll height
function setFrame() {
  //set last_pos to scroll #
	last_pos = window.scrollY;

	if (!ticking) {
    
		window.requestAnimationFrame(function() {
      //set p tag to show scroll rounded to nearest whole nubmer
      heightText.innerHTML = Math.round(last_pos);
      knobAnimation();

			ticking = false;

		});

		ticking = true;
	}

}





function knobAnimation(){
  //remove animations
  knob.classList.remove("knobSpin");
  knob.classList.remove("knobSpinRev");
  
  if(last_pos ++){
    knob.classList.add("knobSpin");
    // knob.style.animationPlayState = "running";
    // knob.style.animationDirection = "normal";
  }else if(last_pos --){
    knob.classList.add("knobSpinRev");
    // knob.style.animationPlayState = "running";
    // knob.style.animationDirection = "reverse";
  //}else{
    // knob.style.animationPlayState = "paused";
  }  
}


//run setframe on window scroll
window.addEventListener('scroll', setFrame, false);