function displayRandomMovie() {
  const randomNumber = Math.floor(Math.random() * 5);
  const randomMovie = movies[randomNumber];
  document.getElementById("Movies").innerHTML = randomMovie;
}

function displayMessage() {
  const popUp = document.getElementById("pop-up");
  popUp.style.display = "block";
  const registerForm = document.getElementById("register-form");
  registerForm.style.display = "none";
  displayRandomMovie();
}

const buttonRegister = document.getElementById("register-button");
buttonRegister.addEventListener("click", displayMessage);

const movies = [
  "raya and the last dragon",
  "Black Panther",
  "star wars",
  "la la land",
  "jaws"
];
