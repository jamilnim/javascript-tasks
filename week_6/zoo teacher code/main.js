// const animalSimple = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
const animals = [
  { name: "Fox", type: "Mammal", age: 4, color: "Black", location: "Africa" },
  {
    name: "Eagle",
    type: "Bird",
    age: 5,
    color: "Brown",
    location: "North America",
  },
  { name: "Cobra", type: "Reptile", age: 3, color: "Green", location: "Asia" },
  {
    name: "Frog",
    type: "Amphibian",
    age: 2,
    color: "Green",
    location: "South America",
  },
  {
    name: "Salmon",
    type: "Fish",
    age: 6,
    color: "Silver",
    location: "North Atlantic",
  },
  { name: "Tiger", type: "Mammal", age: 7, color: "Orange", location: "Asia" },
  {
    name: "Penguin",
    type: "Bird",
    age: 8,
    color: "Black & White",
    location: "Antarctica",
  },
  {
    name: "Komodo Dragon",
    type: "Reptile",
    age: 10,
    color: "Gray",
    location: "Indonesia",
  },
  {
    name: "Toad",
    type: "Amphibian",
    age: 3,
    color: "Brown",
    location: "Australia",
  },
  {
    name: "Shark",
    type: "Fish",
    age: 15,
    color: "Blue",
    location: "Pacific Ocean",
  },
  { name: "Lion", type: "Mammal", age: 6, color: "Golden", location: "Africa" },
  {
    name: "Parrot",
    type: "Bird",
    age: 4,
    color: "Red & Green",
    location: "Amazon Rainforest",
  },
  {
    name: "Iguana",
    type: "Reptile",
    age: 5,
    color: "Green",
    location: "Caribbean",
  },
  {
    name: "Axolotl",
    type: "Amphibian",
    age: 1,
    color: "Pink",
    location: "Mexico",
  },
  { name: "Goldfish", type: "Fish", age: 2, color: "Gold", location: "China" },
];

const animalList = document.querySelector("#animalList");
const addAnimalButton = document.querySelector("#addAnimal");

const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");
const filtertype = document.querySelector("#filterType");

const desplayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // will clean the ul

  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `(${animal.name},${animal.type},${animal.age},${animal.color},${animal.location})`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animals.push(nameInput);
  desplayAnimals(animals);
  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filterAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );
  desplayAnimals(filterAnimals);
};

const filterByTypeAnimal = () => {
  const selectedType = filtertype.value;
  if (selectedType === "All") {
    desplayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    desplayAnimals(filteredAnimals);
  }
};

const sortAnimal = () => {
  animals.sort();
  desplayAnimals(animals);
};

addAnimalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
filtertype.addEventListener("change", filterByTypeAnimal);
sortButton.addEventListener("click", sortAnimal);
desplayAnimals(animals);
