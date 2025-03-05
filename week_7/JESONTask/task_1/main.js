/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here

const student={
    name:'jamil',
    age:43,
    grade:4
}

const studentJosonstring = JSON.stringify(student);
console.log(studentJosonstring )

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here

const studentObject = JSON.parse(studentJosonstring)
console.log(studentObject)