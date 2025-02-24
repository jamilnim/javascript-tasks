// Exercise 7: Filter only positive temperatures from the temperatures array
// let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
// Write your function here

let temperatures = [-10, 5, -3, 15, -8, 20, 2];
// with filter function:

const positiveTemperatures = temperatures.filter(
  (temperature) => temperature > 0
);
console.log(positiveTemperatures);

// using forEach

let newTemp = [];
temperatures.forEach((temp) => {
  if (temp > 0) {
    newTemp.push(temp);
  }
});

console.log(newTemp);