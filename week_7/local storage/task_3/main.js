/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here

const favoriteBooks = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const favoriteBooksReturn = JSON.parse(localStorage.getItem("favoriteBooks"))
favoriteBooksReturn.forEach(favoriteBook=>console.log(favoriteBook.title))
