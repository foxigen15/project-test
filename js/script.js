"use sctrict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов", ""),
//       b = +prompt("На сколько баллов вы его оцениваете?", ""),
//       c = prompt("Один из последних просмотренных фильмов", ""),
//       d = +prompt("На сколько баллов вы его оцениваете?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 50;
// (num == 50)? console.log("Ok"): console.log("Error");

// switch (num) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 50:
//         console.log("Ok");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;     
// };

let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// while (num < 55) {
//     console.log(num);
//     num++;
// };

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue; // пропустит шаг, т.е. значение 6 не выведет в консоль
    }
    console.log(i);
}
