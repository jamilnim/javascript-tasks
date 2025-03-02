/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here

const students = [
    { name: "Jamil", age: 15, grade:92 },
    { name: "Sumon", age: 16, grade: 94 },
    { name: "Kishor", age: 14, grade: 89 },
    { name: "Babu", age: 17, grade: 90 },
    { name: "Chabi", age: 15, grade: 89 }
  ];

//   for Each used
students.forEach(student=> {if (student.grade>90){
    console.log(student.name)
}})
    
// // for  ... of used 
for (let student2 of students){
    if (student2.grade>90){
        console.log(student2.name)
    }
}

// using filter(it change the axisting arry)

  const topStudents=students.filter(student3=>student3.grade>90)
  topStudents.forEach(topstudent=>console.log(topstudent.name))
