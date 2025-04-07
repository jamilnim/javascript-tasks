/* Task 5: Fix Rest Destructuring  
Extract `title` and collect the remaining properties into `extraInfo`.  
*/

const book = { title: "JavaScript Guide", pages: 400, author: "John Doe" };

// Fix this
const { title ,...extraInfo } = book;
console.log(title, extraInfo); // Expected: "JavaScript Guide", { pages: 400, author: "John Doe" }


