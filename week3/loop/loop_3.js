/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculatrAverageSpeed = () => {
  let distance;
  let time;
  let speed;
  while (distance != 0) {
    distance = prompt("Input destance in kelometers ");
    if (distance===0){break}
    time = prompt("Input time in hours");
    speed = distance / time;
    console.log("The average speed is:", speed,"km/hour");
  }
};

calculatrAverageSpeed();
// let distance = prompt("Input destance in kelometers ")
// let time = prompt("Input time in hours")
