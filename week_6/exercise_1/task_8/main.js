/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here

const car={brand:'toyotoa', model:2014,year:2019,IsElectric:true}


function ecoConfirmation (){
    if (car.IsElectric=true){
        console.log(car.IsElectric)
    }
}

ecoConfirmation()
