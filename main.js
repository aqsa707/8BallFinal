// HTML Variables
let clickBall = document.getElementById("clickBall");
let answerE1 = document.getElementById("answer");
let inputE1 = document.getElementById("inputE1");
// Event Listner
document.getElementById("clickBall").addEventListener("click", clickAnswer);

// Declare Function
function clickAnswer() {
  // Generate randNum
  let randNum = Math.random() * 5;
  console.log(randNum);
  if (inputE1.value === "") {
    answerE1.innerHTML = "Please ask a question...";
  } else if (
    inputE1.value === "does the magic 8 ball really work?" ||
    inputE1.value === "does the magic 8 ball work?" ||
    inputE1.value === "are you telling the truth?"
  ) {
    answerE1.innerHTML = "NEVER DOUBT MEEE!";
  } else if (randNum < 1) {
    answerE1.innerHTML = "Without a doubt.";
  } else if (randNum < 2) {
    answerE1.innerHTML = "As I see it, yes.";
  } else if (randNum < 3) {
    answerE1.innerHTML = "Don't count on it.";
  } else if (randNum < 4) {
    answerE1.innerHTML = "Outlook not so good.";
  } else if (
    inputE1.value === "does the magic 8 ball really work?" ||
    inputE1.value === "does the magic 8 ball work?" ||
    inputE1.value === "are you telling the truth?"
  ) {
    answerE1.innerHTML = "NEVER DOUBT MEEE!";
  }
}
