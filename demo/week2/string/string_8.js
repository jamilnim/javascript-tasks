/* Create a variable sentence and assign it the value "Learning JavaScript is fun!".
Use .substring() to extract the word "JavaScript" from the sentence.
Print the extracted word using console.log().
Example output:
"Extracted word: JavaScript" */

let targetSentance = "Learning JavaScript is fun!";

let targetWord = targetSentance.substring(9,19);
console.log(targetWord)