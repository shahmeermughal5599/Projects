const getALlButtonsElements = document.querySelectorAll(".btn");
const screenInput = document.querySelector(".screen");
const selectEqualBtn = document.querySelector(".btn-equal");
const clearButton = document.querySelector(".btn-clear");

getALlButtonsElements.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    event.preventDefault();
    const currentElement = event.target;
    const buttonVal = currentElement.getAttribute("data-num");

    screenInput.value += buttonVal; // purani wali value jor do new value k sath

    console.log(buttonVal, "buttonVal");
    console.log(currentElement, "currentElement");
  });
});

selectEqualBtn.addEventListener("click", function (event) {
  event.preventDefault();
  screenInput.value = eval(screenInput.value);
});

clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  screenInput.value = "";
});

screenInput.addEventListener("input", function (event) {
  event.preventDefault();
  const currentElement = event.target;
  // it's mean you are entering the a to z so it will return true
  if (onlyLetters(currentElement.value)) {
    currentElement.value = "";
  }
});

// regular expression
// regex

function onlyLetters(str) {
  return /[a-zA-z]+$/.test(str);
}
