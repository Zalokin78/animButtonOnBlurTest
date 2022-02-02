"use strict";

const condition = true;

const classes = document.getElementsByClassName("msg");

console.log(classes);

if (condition) {
  for (let i = 0; i < classes.length; i++) {
    classes[i].classList.add("hover");
  }
}

/* var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;

if( !isTouch ){
    // add class which defines hover behavior
} */
