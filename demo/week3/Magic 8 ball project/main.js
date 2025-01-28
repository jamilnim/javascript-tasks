// Write a function named magic8Ball:
// Useprompt() to ask the user for a "Yes or No" question.
// Log the question to the console.
// Generate a random number:
// UseMath.random() to generate a random number between 1 and8.
// UseMath.floor() to ensure the number is a whole number.
// Use a switch statement:
// Based on the random number(1 to8), return one of the following responses:
// 1: "Yes, definitely!"
// 2: "It is certain."
// 3: "Reply hazy, try again."
// 4: "Ask again later."
// 5: "Better not tell you now."
// 6: "My sources say no."
// 7: "Outlook not so good."
// 8: "Signs point to yes.";
// Display the result:
// Log the randomly selected answer to the console.
// Show the answer in analert().

let question = window.prompt("Ask something which I can answer yes or no");



let reply =(rendomNumber)=>{
    switch(true){
        case rendomNumber === 1:
            return "Yes, definitely!";
        case rendomNumber === 2:
            return "It is certain.";
        case rendomNumber ===3:
            return "Reply hazy, try again.";
        case rendomNumber === 4:
            return "Ask again later.";
        case rendomNumber ===5:
            return "Better not tell you now.";
        case rendomNumber ===6:
            return  "My sources say no.";
        case rendomNumber ===7:
            return "Outlook not so good.";
        default: 
            return "Signs point to yes.";
        
    }
}

requiredNumber = Math.floor(Math.random() * (8 - 1) + 1);


console.log(question);
console.log("my score is",requiredNumber)
console.log(reply(requiredNumber));

