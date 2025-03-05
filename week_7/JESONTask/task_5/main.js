/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport={
    temperature:26,
    humidity:14,
    conditions:"Sunny", 
}

const weatherJSON = JSON.stringify(weatherReport)
console.log(weatherJSON)
const weatherObject = JSON.parse(weatherJSON)
console.log(weatherObject)
console.log(weatherObject.conditions)