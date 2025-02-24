// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
// let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
// let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here

let reserve1Animals = ['Fox', 'Deer', 'Owl', 'Bear'];
let reserve2Animals = ['Bear', 'Wolf', 'Eagle', 'Fox'];
let matchData

reserve1Animals.forEach(animal=>console.log("Common species:",(reserve2Animals.filter(animal2=>animal2===animal))))

reserve1Animals.forEach(animal=> {if (reserve2Animals.includes(animal)){
    console.log("Common species:",animal)}
})