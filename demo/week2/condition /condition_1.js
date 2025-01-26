/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

const checkAudult = (age) =>{
    return age>= 18 ? "you are an audult" :""
};

console.log(checkAudult(18));
console.log(checkAudult(17));

const age =16 ;
const isAdult= age >=18 ? "your are an adult":""

console.log (isAdult)