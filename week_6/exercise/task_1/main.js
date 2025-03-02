/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code herw

const library= [
    { title: "Amar Asa Jol", author: "Humayun Ahmed", yearPublished: 1998 },
    { title: "Himu Mama", author: "Humayun Ahmed", yearPublished: 2006 },
    { title: "Debi", author: "Humayun Ahmed", yearPublished: 1985 },
    { title: "Shuvro", author: "Humayun Ahmed", yearPublished: 1997 }
]

console.log(library)
library.push({title:'mala',author:"humaun",yearPublished:1999},{title:'aina',author:"humaun",yearPublished:2008})

console.log(library)

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title)
library[1].yearPublished=2004
console.log(library)

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library[0].genres='litarature'
console.log(library)
library[1]['isAvailable']=true
console.log(library)
library[0].genres=['litarature','romantic']
console.log(library)