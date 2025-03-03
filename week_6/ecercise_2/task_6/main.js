/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here

const courses = [
    { courseName: "Mathematics", instructor: "Dr. Rahman", studentsEnrolled: 25 }, 
    { courseName: "Physics", instructor: "Prof. Karim", studentsEnrolled: 45 },
    { courseName: "Chemistry", instructor: "Dr. Ayesha", studentsEnrolled: 28 },  
    { courseName: "Biology", instructor: "Dr. Hasan", studentsEnrolled: 50 },
    { courseName: "Computer Science", instructor: "Mr. Alam", studentsEnrolled: 22 },  
    { courseName: "History", instructor: "Ms. Rina", studentsEnrolled: 35 },
    { courseName: "English", instructor: "Dr. Samad", studentsEnrolled: 18 }  
  ];

  function wellEnrolleds(){
    courses.forEach(course=>{if(course.studentsEnrolled>30){console.log(course.courseName)}})
  }
  wellEnrolleds()
