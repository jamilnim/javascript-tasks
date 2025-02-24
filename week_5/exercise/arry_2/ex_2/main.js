// Exercise 2: Iterate over the planets array and log each planet with its index
// const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here

// forEach method
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
let i = 0;
 function Indexfind() { planets.forEach(planet =>console.log("Planet:",planet, "Index:",i++))};
Indexfind()

// map method

const planets2 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]
let i2=0

const indexFind2 = planets2.map(planet=>planet+i2++)
console.log(indexFind2)

// for loop 

for (let i=0;i<(planets.length);i++){
    console.log("Planet:",planets[i],"Index:",i)
}

// while loop
while (i<planets.length){
    console.log("Planet:",planets[i],"Index:",i)
    i++

}