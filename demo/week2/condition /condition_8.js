/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

const canVote = (age) =>{
    if (age>=18){return "Eligible to vote"}
    else {return "Not eligible to vote" };
};

console.log(canVote(18));
console.log(canVote(15));
console.log(canVote(40));
console.log(canVote(8));

const age2 =15

const canVote2 =age2>=18 ? "Eligible to vote" : "Not eligible to vote" ;

console.log(canVote2)
