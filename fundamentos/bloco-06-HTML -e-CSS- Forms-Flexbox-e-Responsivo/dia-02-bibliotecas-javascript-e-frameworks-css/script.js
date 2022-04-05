window.onload = function () {
  const agreement = document.querySelector('#concordo');
  agreement.addEventListener('change', enableSubmit);
};

function enableSubmit() {
  const submitBtn = document.querySelector("#submit-btn");
  const agreement = document.querySelector("#concordo");
  submitBtn.disabled = !agreement.checked;
}
