/* 
Write a function named getGrade:
Take a score as a parameter.
If score is 90 or higher, return "Grade A".
If score is between 80 and 89, return "Grade B".
For any other score, return "Grade C".
Call the function with scores like 85 and 75 and print the result. 
*/

const getGrade = (score) => {
  if (score >= 90) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Gread B";
  } else {
    return "Gread C";
  }
};

console.log(getGrade(85));
console.log(getGrade(75));

const getGrade2 = (score) => {
  switch (true) {
    case score >= 90:
      return "Gread A";
    case score >= 80 && score <= 89:
      return "Gread B";
    default:
      return "Gread C";
  }
};

console.log(getGrade2(85));
console.log(getGrade2(75));
