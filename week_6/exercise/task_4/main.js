
/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function Book(title,author,yearPublished,genres){
    this.title=title;
    this.author=author;
    this.yearPublished=yearPublished;
    this.genres=genres;
}
const book1=new Book('leadership','simon sink',2004,'motibavion')
const book2=new Book('leadership2','simon sink2',2005,'motibavion2')
console.log(book1,book2)
// const librery=[]
// librery.push(book1,book2)
// console.log(librery)



