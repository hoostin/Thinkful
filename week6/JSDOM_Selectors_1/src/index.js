/*import "./index.css";*/

/*
 Your solutions here
 */

// import "./index.css";

// const ratings = document.querySelectorAll(".rating .value");
// console.log(ratings);

// const halfStars = document.querySelectorAll(".stars");
// console.log(halfStars);

// const gatewayArch = document.querySelector("#ganp");
// console.log(gatewayArch);

// const established = document.querySelector("#ganp .value");

// console.log(established);
/**
 Write a statement that will find all elements containing the value of a rating on the page.
 
 In this first example, the `document.querySelector()` syntax is included for you.
*/

const ratings = document.querySelectorAll(".rating .value");
console.log(ratings);
/**
Write a statement that will find all elements on the page containing stars that are not shaded.

Replace the entire string with your own code.

*/
const halfStars = document.querySelectorAll(".half");
/**
 Write a statement that will find the Gateway Arch park element by it's id.
*/
const gatewayArch = document.querySelector("#ganp");

/**
Write a statement that will find the element containing the established date for the Gateway Arch park
*/
const established = gatewayArch.querySelector(".established .value");

/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
const body = document.querySelector("body");

if (ratings) {
  if (ratings instanceof NodeList) {
    ratings.forEach((node) => node.classList.add("r1"));
  } else {
    body.classList.add("e1");
  }
}

if (halfStars) {
  if (halfStars instanceof NodeList) {
    halfStars.forEach((node) => node.classList.add("h1"));
  } else {
    body.classList.add("e2");
  }
}

if (gatewayArch) {
  if (gatewayArch instanceof Node) {
    gatewayArch.classList.add("g1");
  } else {
    body.classList.add("e3");
  }
}

if (established) {
  if (established instanceof Node) {
    established.classList.add("es1");
  } else {
    body.classList.add("e4");
  }
}
