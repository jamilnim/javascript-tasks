/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/

let num = 5.67

const round = Math.round(num)
const round_down= Math.floor(num)
const round_ceil=Math.ceil(num)


console.log("the round value is "+round)
console.log("the round down value is "+round_down)
console.log("the nearest value is "+round_ceil)