/* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/

let sumFromOneToHundred=()=>{
    let count=1;
    let totalNumber=0;
    for(count=1;count<=100;count++){
        totalNumber=totalNumber+count
    }
    console.log("total of all number 1 to 100:",totalNumber)
}

sumFromOneToHundred();
