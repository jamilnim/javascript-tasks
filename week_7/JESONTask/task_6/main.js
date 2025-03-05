/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here

const movies=[
    {title:'agunerporoshmoni',director:'Humaun',rating:8.5},
    {title:'amar bondhu rashed',director:'Jafor',rating:8.3},
    {title:'kutus katus',director:'Shuvasis',rating:7},
    {title:'ora agaro jon',director:'ali akbar',rating:7.5},
    {title:'aina baji',director:'jamil raza',rating:8.5}
]

const moviesJson= JSON.stringify(movies)
console.log(moviesJson)
const moviesArray=JSON.parse(moviesJson)
console.log(moviesArray)

movies.forEach(movie=> {if(movie.rating>8){console.log(movie.title)}})