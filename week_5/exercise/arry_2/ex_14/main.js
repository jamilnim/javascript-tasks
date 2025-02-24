// Exercise 14: Find all occurrences of "John" in attendees
// let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/
// Write your code here

let attendees = ['John', 'Sarah', 'John', 'Alex', 'John'];
let newattendees=[]
let reqiredIndex
attendees.forEach((atten,index)=>{if(atten==="John"){
newattendees.push(index)}
});


console.log(newattendees)