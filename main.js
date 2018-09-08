(() => {
  let heightText = document.querySelector("p"),
      knob = document.querySelector("#outerring"),
      last_pos = 0;

  function scrollDir() {
    let current_pos = window.scrollY; // get the scroll position (can do this a couple of different ways)

    // ternary statement (shorthand if / else) - if the condition is true, animDir is what's to the left of the colon. if it's false, then it's whatever is to the right of the colon
    let animDir = (current_pos > last_pos) ? "knobSpin" : "knobSpinRev";

    // reset last position for the next iteration of the function
    last_pos = current_pos;
    heightText.textContent = last_pos;

    // run the animation
    knobAnimation(animDir);
  }

  function knobAnimation(direction) {
    //remove animations
    knob.classList.remove("knobSpin");
    knob.classList.remove("knobSpinRev");
    
    knob.classList.add(direction);
  }


  //run setframe on window scroll
  window.addEventListener('scroll', scrollDir, false);
})();

