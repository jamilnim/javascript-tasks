/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

const etAnimalDescription =(favoriteAnimal)=>{
    switch (true){
        case favoriteAnimal==="fox":
            return "Foxes are sly and smart!";
        case favoriteAnimal==="dog":
            return "Dogs are loyal friends.";
        case favoriteAnimal==="cat":
            return "Cats are curious and independent.";
        default:
            return "All animals are awesome!";
    }  
}

console.log(etAnimalDescription("dog"));
console.log(etAnimalDescription("cat"));
console.log(etAnimalDescription("fox"));
console.log(etAnimalDescription("rat"));
console.log(etAnimalDescription("bird"));