window.onload = function () {
  const submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", handleSubmit);

  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", clearFields);

  const agreement = document.querySelector('#concordo');
  agreement.addEventListener('change', enableSubmit);
};

function handleSubmit(event) {
  event.preventDefault();
}

function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}
function enableSubmit() {
  const submitBtn = document.querySelector("#submit-btn");
  const agreement = document.querySelector("#concordo");
  submitBtn.disabled = !agreement.checked;
}
