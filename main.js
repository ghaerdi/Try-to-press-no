const buttons = document.querySelectorAll(".answer-btn");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");

buttons.forEach(btn =>
  btn.addEventListener("click", () => alert("YES! I LOVE YOU! <3")));

let screenLimit = 40;
["mouseenter", "mouseleave"].forEach(event =>
  noBtn.addEventListener(event, function(e) {
    event === "mouseenter" ? changeToYesBtn(noBtn) : changeToNoBtn(noBtn);

    if (event === "mouseenter") {
      let positionX = randomNumber(screenLimit) * plusOrMinus();
      let positionY = randomNumber(screenLimit) * plusOrMinus();

      noBtn.style.transform = `translate(${positionX}vw, ${positionY}vh)`;
      screenLimit &&= screenLimit - 0.1;
    }
  })
);

["focus", "focusout"].forEach(event =>
  noBtn.addEventListener(event, function(e) {
    event === "focus" ? changeToYesBtn(noBtn) : changeToNoBtn(noBtn);
  })
);

function changeToYesBtn(btn) {
  btn.innerHTML = "Yes";
  btn.style.background = "#6c9174";
}

function changeToNoBtn(btn) {
  btn.innerHTML = "No";
  btn.style.background = "#85515c";
}

const randomNumber = limit => Math.floor((Math.random() * limit) + 0);
const plusOrMinus = () => Math.round(Math.random()) * 2 - 1;
