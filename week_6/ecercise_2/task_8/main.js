/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

const city = {
    name: "Paris",
    population: 2148000,
    landmark: "Eiffel Tower"
  };

  function citySize (){
    if (city.population>1000000){console.log('This is a big city!')}
    else{' the city is small'}


  }

  citySize()