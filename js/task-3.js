"use strict";

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handelInput);

function handelInput(event) {
  const userInput = event.currentTarget.value.trim();

  if (userInput === "") {
    return (span.textContent = "Anonymous");
  } else {
    span.textContent = userInput;
  }
}
