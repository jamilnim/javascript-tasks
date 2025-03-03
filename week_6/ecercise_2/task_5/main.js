/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here

const students = [
  { name: "Jamil", scores: [85, 90, 88, 92], averageScore: null },
  { name: "Sumon", scores: [78, 82, 79, 85], averageScore: null },
  { name: "Kishor", scores: [91, 89, 94, 90], averageScore: null },
  { name: "Babu", scores: [76, 81, 75, 80], averageScore: null },
  { name: "Chabi", scores: [88, 92, 90, 89], averageScore: null },
  { name: "Rahim", scores: [95, 97, 94, 96], averageScore: null },
  { name: "Karim", scores: [83, 85, 87, 84], averageScore: null },
];

function avarageScore() {
  students.forEach((student) => {
    let totalScore = 0;
    let numberOfScore = 0;

    student.scores.forEach((score) => (totalScore = totalScore += score));

    numberOfScore = student.scores.length;
    student.averageScore = totalScore / numberOfScore;
  });
  console.log(students);
}
console.log(avarageScore());
