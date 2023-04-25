const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  noError=false;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
  
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  let noError=true;

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Nom d'utilisateur est requis");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Adresse de courriel est requis");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Fournissez un adresse de courriel valide.");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Mot de passe est requis");
  } else if (passwordValue.length < 8) {
    setError(password, "Le mot de passe n'a pas 8 caractères");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "La comfirmation de mot de passe est requis");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Les mots de passe ne sont pas égaux");
  } else {
    setSuccess(password2);
  }
  return noError;
};
