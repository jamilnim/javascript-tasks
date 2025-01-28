/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/


const logOddNumbers2 = () => {
  for (i = 98; i > 1; i--) {
    if (i % 2 == 0) {
      console.log(i, 100 - i);
    }
  }
};

console.log(logOddNumbers2());

const logOddNumbers =() =>{
    let i = 2;
    while(i<= 100){
        if (i % 2 ===0){
            console.log(i,100-i);
        }
        i++
    }

}
    

