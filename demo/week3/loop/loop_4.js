/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

// let countEvenNumers = () => {
//   let customerInput;
//   let count = 0;
//   let id = 1;
//   while (id < 20) {
//     customerInput = prompt("Please input a number");
//     if (customerInput % 2 === 0) {
//       count++;
//     }
//     id++;
//   }
//   console.log(count);
// };

// countEvenNumers();

let countEvenNumbers2 =()=>{
    let coustomerInput2;
    let count2 = 0;
    let id2 =1
    for ( id=0;id2<20;id2++){
        coustomerInput2 = prompt("Please input a number")
        if (coustomerInput2 % 2 === 0) {
            count2++
    }
}
console.log(count2)
}

countEvenNumbers2()