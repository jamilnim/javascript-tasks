const animalSimple = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
const animals =[
    { name: "Fox", type: "Mammal", age: 4, color: "Black", location: "Africa" },
  { name: "Eagle", type: "Bird", age: 5, color: "Brown", location: "North America" },
  { name: "Cobra", type: "Reptile", age: 3, color: "Green", location: "Asia" },
  { name: "Frog", type: "Amphibian", age: 2, color: "Green", location: "South America" },
  { name: "Salmon", type: "Fish", age: 6, color: "Silver", location: "North Atlantic" },
  { name: "Tiger", type: "Mammal", age: 7, color: "Orange", location: "Asia" },
  { name: "Penguin", type: "Bird", age: 8, color: "Black & White", location: "Antarctica" },
  { name: "Komodo Dragon", type: "Reptile", age: 10, color: "Gray", location: "Indonesia" },
  { name: "Toad", type: "Amphibian", age: 3, color: "Brown", location: "Australia" },
  { name: "Shark", type: "Fish", age: 15, color: "Blue", location: "Pacific Ocean" },
  { name: "Lion", type: "Mammal", age: 6, color: "Golden", location: "Africa" },
  { name: "Parrot", type: "Bird", age: 4, color: "Red & Green", location: "Amazon Rainforest" },
  { name: "Iguana", type: "Reptile", age: 5, color: "Green", location: "Caribbean" },
  { name: "Axolotl", type: "Amphibian", age: 1, color: "Pink", location: "Mexico" },
  { name: "Goldfish", type: "Fish", age: 2, color: "Gold", location: "China" }
]

const animalList = document.querySelector("#animalList");
const addAnimalButton = document.querySelector("#addAnimal");

const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimal");

const desplayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // will clean the ul

  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animalSimple.push(nameInput);
  desplayAnimals(animalSimple);
  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filterAnimals = animalSimple.filter((animal) =>
    animal.toLowerCase().includes(searchText)
  );
  desplayAnimals(filterAnimals);
};

const sortAnimal = () => {
  animalSimple.sort();
  desplayAnimals(animalSimple);
};

addAnimalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
desplayAnimals(animalSimple);
