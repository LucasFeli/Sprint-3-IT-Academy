// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((directors) => directors.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directors = array.filter((movie) => movie.director === director);

  let sum = directors.reduce((total, movie) => total + movie.score, 0);
  let average = sum / directors.length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let copiedArray = [...array];
  let firstTwenty = copiedArray
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20);
  let titlesString = firstTwenty.map((objeto) => objeto.title);

  return titlesString;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let movieYear = array
    .map((movie) => movie)
    .sort((a, b) => (a.year > b.year ? 1 : -1));
  return movieYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movieData) {
  let genreData = {};

  movieData.forEach((movie) => {
    movie.genre.forEach((genre) => {
      if (genreData[genre]) {
        genreData[genre].totalScore += movie.score;
        genreData[genre].movieCount++;
      } else {
        genreData[genre] = {
          totalScore: movie.score,
          movieCount: 1
        };
      }
    });
  });

  let averageScoresByGenre = {};
  Object.keys(genreData).forEach((genre) => {
    averageScoresByGenre[genre] = parseFloat(
      (genreData[genre].totalScore / genreData[genre].movieCount).toFixed(2)
    );
  });

  return averageScoresByGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let time = array.map((movie) => {
    const duration = movie.duration.split(' ');
    let totalMinutes = 0;
    if (duration.length === 2) {
      const hours = parseInt(duration[0]);
      const minutes = parseInt(duration[1]);
      totalMinutes = hours * 60 + minutes;
    } else if (duration.length === 1 && duration[0]) {
      const hours = parseInt(duration[0]);
      totalMinutes = hours * 60;
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });
  return time;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const bestMoviesOfYear = array.filter((movie) => movie.year === year);

  if (bestMoviesOfYear.length === 0) {
    return [];
  }

  const bestMovie = bestMoviesOfYear.reduce((best, current) => {
    return current.score > best.score ? current : best;
  });

  return [bestMovie];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
