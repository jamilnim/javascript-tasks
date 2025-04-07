// /* Task 15: Debug Nested Object Handling
// Should return an array of students who scored above 80.
// */

const students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 85 },
  ];
  
  function getTopStudents(studentList) {
    return studentList.filter(student=>student.score>80).map(student=>student.name)
      
  }
  
  // // Debug & Test
  console.log(getTopStudents(students)); // Expected: ["Alice", "Charlie"]