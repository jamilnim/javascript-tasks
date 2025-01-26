/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

const foodstatus=( isHungry,hasFood) =>{
    if (isHungry==true && hasFood ==true){
        return "Time to eat!"
    } else {return "You need to find food!"}
}

console.log(foodstatus(true,true));
console.log(foodstatus(false,true));