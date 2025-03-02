/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here

const cars = [
  { brand: "Toyota", model: "Corolla", year: 2019, isElectric: false },
  { brand: "Tesla", model: "Model S", year: 2022, isElectric: true },
  { brand: "Ford", model: "Mustang", year: 2021, isElectric: false },
  { brand: "BMW", model: "i4", year: 2023, isElectric: true },
  { brand: "Audi", model: "e-tron", year: 2020, isElectric: true },
  { brand: "Honda", model: "Civic", year: 2018, isElectric: false },
  { brand: "Nissan", model: "Leaf", year: 2021, isElectric: true },
];

// map Mathmin and forEach
function findOldestCar() {
  let earliestYear = Math.min(...cars.map((car) => car.year));
  cars.forEach((car) => {
    if (car.year === earliestYear) {
      console.log(car.brand);
    }
  });
}
findOldestCar();

// only for if 

function findOldestCar2() {
  let earliestYear = 2025;
  let carbrand=""
 
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].year < earliestYear) {
      earliestYear = cars[i].year;
      carbrand=cars[i].brand
    }
  }
  console.log(earliestYear);
  console.log(carbrand)
}
findOldestCar2();
