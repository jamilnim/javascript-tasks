/* 
Write a function named checkForFox:
Take a boolean parameter hasFox.
If hasFox is true, return "You have a fox as a pet!"
Otherwise, return "No fox detected!"
Call the function with true and false and print the result. 
*/

const checkForforx = (hasFox) =>{
    if (hasFox){
        return "your have a fox as a pet!"
    } else{
        return "No fox detected!"
    }
};

console.log(checkForforx(true));
console.log(checkForforx(false));