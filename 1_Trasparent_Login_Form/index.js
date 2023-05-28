// Grabbing elements for Html
const passwordInputEl = document.querySelector(".password__input");
const formEl = document.querySelector(".form__btn");
const showEl = document.querySelector(".show");

// passwordInputEl input listen

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
