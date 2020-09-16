"use sctrict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 1;
while (i <= numberOfFilms){
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("На сколько баллов вы его оцениваете?", "");
    if (a != "" && a != null && a.length <= 50 && b != "" && b != null){
        personalMovieDB.movies[a] = b;
        i++;
    } else {console.log("error");}
}

if (personalMovieDB.count < 10){
    console.log('Слишком мало посмотрел');
} else if (personalMovieDB.count >10 && personalMovieDB.count <=50){
    console.log('Вы классический зритель');
} else{
    console.log('Вы киноман');
}

console.log(personalMovieDB);

