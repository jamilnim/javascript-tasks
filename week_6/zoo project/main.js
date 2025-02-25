const animalList = document.getElementById("animalList");
const searchAnimal = document.getElementById("searchAnimal");
const newAnimalName = document.getElementById("newAnimalName");
const addAnimalBtn = document.getElementById("addAnimal");
const sortAnimalsBtn = document.getElementById("sortAnimals");

const addAnimalNames = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];

function uploadName() {
  animalList.innerHTML = "";
  addAnimalNames.forEach((animalName) => {
    const animalEliment = document.createElement("li");
    animalEliment.innerText = animalName;
    animalList.appendChild(animalEliment);
  });
}

function addName() {
  animalList.innerHTML = "";
  let formatedWord =
    newAnimalName.value.charAt(0).toUpperCase() + newAnimalName.value.slice(1);
  addAnimalNames.push(formatedWord);
  addAnimalNames.forEach((animalName) => {
    const animalEliment = document.createElement("li");
    animalEliment.innerText = animalName;
    animalList.appendChild(animalEliment);
  });
}

function sortAnimal() {
  animalList.innerHTML = "";
  addAnimalNames.sort();
  uploadName();
}

document.addEventListener("DOMContentLoaded", uploadName);
addAnimalBtn.addEventListener("click", addName);
addAnimalBtn.addEventListener("click", inputFormate);
sortAnimalsBtn.addEventListener("click", sortAnimal);
