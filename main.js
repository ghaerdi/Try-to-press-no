function changeButtonPosition(button) {
  let screenLimit = 54;

  for (let event of ["mouseenter", "mouseleave"]) {
    button.addEventListener(event, function() {
      toggleButton(button, event, "mouseenter");

      if (event === "mouseenter") {
        let positionX = randomNumber(screenLimit) * plusOrMinus();
        positionX = positionX < 40 ? positionX : positionX * -1;
        let positionY = randomNumber(screenLimit < 40 ? screenLimit : 40) * plusOrMinus();

        button.style.transform = `translate(${positionX}vw, ${positionY}vh)`;

        screenLimit &&= screenLimit - 0.25;

      }
    })
  }
}

function focusButton(button) {
  for (let event of ["focus", "focusout"]) {
    button.addEventListener(event, () =>
      toggleButton(button, event, "focus"));
  }
}

function changeToYesButton(button) {
  button.innerHTML = "Yes";
  button.style.background = "#6c9174";
}

function changeToNoButton(button) {
  button.innerHTML = "No";
  button.style.background = "#85515c";
}

const randomNumber = limit => Math.floor((Math.random() * limit));
const plusOrMinus = () => Math.round(Math.random()) * 2 - 1;
const toggleButton = (button, actualEvent, desiredEvent) =>
  actualEvent === desiredEvent ? changeToYesButton(button) : changeToNoButton(button);

function buttonHandler() {
  const answerButtons = document.querySelectorAll(".answer-btn");
  const yesButton = document.querySelector("#yes-btn");
  const noButton = document.querySelector("#no-btn");

  answerButtons.forEach(button =>
    button.addEventListener("click", () => alert("YES! I LOVE YOU! <3")));

  changeButtonPosition(noButton);
  focusButton(noButton);
}

function main() {
  buttonHandler();
}

main();
