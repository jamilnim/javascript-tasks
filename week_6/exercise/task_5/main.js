/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here

function CreatBook (title, author, yearPublished, genres){
    this.title=title
    this.author=author
    this.yearPublished=yearPublished
    this.genres=genres
}

let book1 =new CreatBook ('himu','Humaun ahmed',2000,'fiction')
let book2 =new CreatBook ('amar joy','Humaun ahmed',2000,'romance')
console.log(book1,book2);
console.log(CreatBook)

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here


const josonBOOK=JSON .stringify(book1)
console.log(josonBOOK)
const josonStringBack=JSON.parse(josonBOOK)
console.log(josonStringBack)
console.log(josonStringBack.title)