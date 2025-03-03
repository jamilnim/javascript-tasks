/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

const pet = {
    species: "Dog",
    name: "Buddy",
    isVaccinated: false
  };

  function VaccinationStatus (){
    if (pet.isVaccinated===false){
        console.log("Vaccination required")
    }
  }
  VaccinationStatus()