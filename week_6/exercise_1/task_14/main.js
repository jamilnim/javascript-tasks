/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here

const foxCollections = [
    { name: "Arctic Fox", age: 3, habitat: "Tundra" },
    { name: "Fennec Fox", age: 2, habitat: "Deserts" },
    { name: "Gray Fox", age: 5, habitat: "Woodlands" },
    { name: "Swift Fox", age: 4, habitat: "Grasslands" },
    { name: "Kit Fox", age: 3, habitat: "Semi-deserts" }
];

function foxClass(){
foxCollections.forEach(fox=> {if (fox.age>=3){
    console.log(fox.name,"-This fox is an adult")
}else {console.log(fox.name,"-This fox is young")}
})
}

foxClass()