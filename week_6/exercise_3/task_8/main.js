/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/


class Car {
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
carAge() {
let nowDate=new Date()
let nowyear=nowDate.getFullYear()
return nowyear-this.year

}
}

const car2=new Car('toyota','yaris',1998);
console.log(car2)
console.log(car2.carAge())