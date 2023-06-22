'use strict';

let numbersOfFilms = +prompt('How many films did you watch?', '');

let personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
let a = prompt('One of last seen films?');
let b = prompt('What is grade?');
let c = prompt('One of last seen films?');
let d = prompt('What is grade?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
