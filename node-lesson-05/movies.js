let movies = [
  { title: "Movie 1", storyline: "This is the storyline for movie 1." },
  { title: "Movie 2", storyline: "This is the storyline for movie 2." },
];

function getMovies() {
  movies.forEach((movie, index) => {
    setTimeout(() => {
      console.log(`Title: ${movie.title}, Storyline: ${movie.storyline}`);
    }, 1000 * (index + 1));
  });
}

function createMovies(movie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      movies.push(movie);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Could not add the movie");
      }
    }, 2000);
  });
}

async function init() {
  try {
    await createMovies({
      title: "Movie 3",
      storyline: "This is the storyline for movie 3.",
    });
    getMovies();
  } catch (error) {
    console.log(error);
  }
}

init();
