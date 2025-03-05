/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here


const movies=[
    {title:'agunerporoshmoni',director:'Humaun',rating:8.5},
    {title:'amar bondhu rashed',director:'Jafor',rating:8.3},
    {title:'kutus katus',director:'Shuvasis',rating:7},
    {title:'ora agaro jon',director:'ali akbar',rating:7.5},
    {title:'aina baji',director:'jamil raza',rating:8.5}
]

const moviesJson=JSON.stringify(movies)
// console.log(moviesJson)

function filterHighRatedMovies(){
    const moviesArray=JSON.parse(moviesJson)
    console.log(moviesArray)
    const goodmovies=[]
    moviesArray.forEach(movie=>{if(movie.rating>8){goodmovies.push(movie)}})
        console.log(goodmovies)
}

filterHighRatedMovies()
