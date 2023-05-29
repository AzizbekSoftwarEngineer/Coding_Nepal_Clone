// Grabbing elements for Html
const fieldInputEl = document.querySelectorAll(".field__input");
const passwordInputEl = document.querySelector(".password__input");
const formEl = document.querySelector(".form__btn");
const showEl = document.querySelector(".eye");
const placeholderEls = document.querySelectorAll(".placeholder");

// passwordInputEl input listen
fieldInputEl.forEach((inputs) => {
  inputs.addEventListener("keyup", (e) => {
    if (inputs.value.length > 0) {
      inputs.nextElementSibling.classList.add("left");
    } else {
      inputs.nextElementSibling.classList.remove("left");
    }
  });
});
passwordInputEl.addEventListener("input", (e) => {
  if (passwordInputEl.value.length) {
    showEl.classList.add("show");
    showEl.classList.remove("hidden");
  } else {
    showEl.classList.remove("show");
    showEl.classList.add("hidden");
  }
});
showEl.addEventListener("click", (e) => {
  if (passwordInputEl.type === "password") {
    passwordInputEl.type = "text";
    showEl.classList.remove("fa-eye");
    showEl.classList.add("fa-eye-slash");
  } else {
    passwordInputEl.type = "password";
    showEl.classList.add("fa-eye");
    showEl.classList.remove("fa-eye-slash");
  }
});
