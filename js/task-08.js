

const formInputs = document.querySelector(".login-form");

formInputs.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Uzupełnij poprawnie wszystkie pola");
  } else {
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const userData = { email, password };
    console.log(userData);
    formEl.reset();
  }
}


