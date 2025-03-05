/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here

const classroom = [
    { name: "Aisha", age: 14, grade: "A" },
    { name: "Rahim", age: 15, grade: "B+" },
    { name: "Sadia", age: 13, grade: "A-" },
    { name: "Kamal", age: 16, grade: "B" },
    { name: "Jamil", age: 14, grade: "A+" }
  ];

  const classroomData=JSON.stringify(classroom)
  console.log(classroomData)

  /* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here

const classroomArray = JSON.parse(classroomData)
console.log(classroomArray)
classroomArray.forEach(classroom => console.log(classroom.name));