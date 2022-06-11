/* LEARNED THE VALIDATION PART FROM: 

-> https://www.freecodecamp.org/news/learn-javascript-form-validation-by-making-a-form/
*/

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

/* All id */
let firstname = id("firstName");
let lastname = id("lastName");
let email = id("email");
let password = id("psw");
let form = id("mainForm");

/* All classes */
let errorMsg = classes("form__error");
let successIcon = classes("form__state--success");
let successBorder = classes("form__input");
let errorIcon = classes("form__state--error");

/* Target the form and adding the submit eventlistner */
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  /* Goes through the inputs like an array -> 0,1,2,3, ... */
  engine(firstname, 0, "Please enter your firstname");
  engine(lastname, 1, "Please enter your lastname");
  engine(emailAdress, 2, "Please enter your email");
  engine(password, 3, "Please a password");
});

/* id = all id's, serial = error, success, icons, message = print message in .error */
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    errorIcon[serial].style.display = "block";
  } else {
    errorMsg[serial].innerHTML = ""; /* Show no error message */
    errorIcon[serial].style.display = "none"; /* Display no error icon */
    successIcon[serial].style.display = "block"; /* Display success icon */
    successBorder[serial].style.border =
      "thin solid #78de8e"; /* change border and color on the "success" input */
  }
  setTimeout(function () {
    window.location.reload();
  }, 10000);
};
