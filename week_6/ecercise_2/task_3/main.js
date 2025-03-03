/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here

const restaurants = [
    { name: "The Spice House", cuisineType: "Indian", rating: 4.7 },
    { name: "Sushi World", cuisineType: "Japanese", rating: 4.8 },
    { name: "Pasta Paradise", cuisineType: "Italian", rating: 2 },
    { name: "Taco Fiesta", cuisineType: "Mexican", rating: 3 },
    { name: "Grill Master", cuisineType: "American", rating: 4 },
    { name: "Ocean Breeze", cuisineType: "Seafood", rating: 4.9 }
];

function goodResturents(){
    restaurants.forEach(resturent=>{if (resturent.rating>=4){
        console.log(resturent.name,"Resturent is good")
    }})
}
goodResturents()