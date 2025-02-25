const animalList = document.getElementById("animalList");
const searchAnimal = document.getElementById("searchAnimal");
const newAnimalName = document.getElementById("newAnimalName");
const addAnimalBtn = document.getElementById("addAnimal");
const sortAnimalsBtn = document.getElementById("sortAnimals");

const addAnimalNames = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];

// adding animal in li
function uploadName() {
  animalList.innerHTML = "";
  addAnimalNames.forEach((animalName) => {
    const animalEliment = document.createElement("li");
    animalEliment.innerText = animalName;
    animalList.appendChild(animalEliment);
  });
}

// adding new animal name
function addName() {
  animalList.innerHTML = "";
  // converting input ist workd capital
  let formatedWord =
    newAnimalName.value.charAt(0).toUpperCase() + newAnimalName.value.slice(1);
  // pushing new work in Array
  addAnimalNames.push(formatedWord);
  addAnimalNames.forEach((animalName) => {
    const animalEliment = document.createElement("li");
    animalEliment.innerText = animalName;
    animalList.appendChild(animalEliment);
  });
}

// shoring animal name
function sortAnimal() {
  animalList.innerHTML = "";
  addAnimalNames.sort();
  uploadName();
}

document.addEventListener("DOMContentLoaded", uploadName);
addAnimalBtn.addEventListener("click", addName);
sortAnimalsBtn.addEventListener("click", sortAnimal);
