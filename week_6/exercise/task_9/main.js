/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here

const movies = [
    { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", rating: 8.7 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 8 },
    { title: "Parasite", director: "Bong Joon-ho", rating: 8.6 },
    { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 }
];

movies.forEach(movie=>{if (movie.rating>8){console.log(movie.title)}})

    for (let movie of movies){
        if(movie.rating>8){
            console.log(movie.title)
        }
    } 