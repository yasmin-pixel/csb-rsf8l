// console.log("👋🏾");

const movies = [
  "Raya and the Last Dragon",
  "Black Panther",
  "Star Wars",
  "La La Land",
  "Jaws"
];

function displayRandomMovie() {
  const randomNumber = Math.floor(Math.random() * 5);
  const randomMovie = movies[randomNumber];
  document.getElementById("movies").innerHTML = randomMovie;
}

const randomMovieButton = document.getElementById("random-movie-button");
randomMovieButton.addEventListener("click", displayRandomMovie);

const tvShows = [
  "The falcon and winter soldier",
  "Billie Eilish",
  "WonderVison",
  "Stranger Things",
  "Game Of Thrones"
];

function displayRandomTvShows() {
  const randomNumber = Math.floor(Math.random() * 5);
  const randomTvShows = tvShows[randomNumber];
  document.getElementById("tv-shows").innerHTML = randomTvShows;
}
const randomTvShowButton = document.getElementById("random-Tv-shows-button");
randomTvShowButton.addEventListener("click", displayRandomTvShows);
