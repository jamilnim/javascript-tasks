/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

let createWordPyramid = () => {
  let collectedWord = prompt("Please input a word");
  let totalLetter = Math.floor(collectedWord.length);
  let count = 0;

  for (count = 0; count <= totalLetter; count++) {
    console.log(collectedWord.substring(0, count));
  }
};
createWordPyramid();
