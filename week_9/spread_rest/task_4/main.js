'use strict';

/* Task 4: Fix Function with Rest Operator  
Make the function work for any number of numbers.  
*/

function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(2, 3, 4)); 
console.log(sumNumbers(1, 2, 3, 4, 5));

