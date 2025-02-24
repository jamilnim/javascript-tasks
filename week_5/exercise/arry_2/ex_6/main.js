// Exercise 6: Log each letter of names from the animalNames array
// let animalNames = ['Lion', 'Tiger', 'Panda'];

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
// Write your code here

let animalNames = ['Lion', 'Tiger', 'Panda'];

animalNames.forEach(animalname=>console.log(`"Letters in '${animalname}' : ${animalname.split("")}"`))
