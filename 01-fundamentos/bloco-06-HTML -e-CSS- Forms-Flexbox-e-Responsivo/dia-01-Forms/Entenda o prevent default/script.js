// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function link(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener("click", link);

function checkbox(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener("click", checkbox);

function text(event) {
  if (event.key === "a") {
    return event;
  } else {
    event.preventDefault();
  }
}
INPUT_TEXT.addEventListener("keypress", text);
