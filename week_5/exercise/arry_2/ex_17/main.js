
// Exercise 17: Remove first and last elements from birdSpecies
// let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin'];

/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
// Write your code here

let birdSpecies = ['Eagle', 'Owl', 'Hawk', 'Sparrow', 'Penguin'];
let newBirdSpecies=birdSpecies.slice(1,(birdSpecies.length-1))
console.log(newBirdSpecies)