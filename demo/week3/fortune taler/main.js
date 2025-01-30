// Fortune Teller
// Create a function named fortuneTeller that:

// Prompts the user for their name and favorite color.
// Selects a random fortune from an array of fortunes, such as:
// "You will find great wealth."
// "An exciting opportunity is coming your way."
// "Prepare for a wonderful surprise!"
// Logs a personalized message with the user’s name, favorite color, and the fortune.
// Shows the fortune in an alert.

let fortuneTeller = () => {
  let name = prompt("Please input your name");

  let color = prompt("Please input your favorite color name");

  let fortune;

  let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);

  if (randomNumber === 1) {
    return (fortune = "You will find great wealth.");
  } else if (randomNumber === 2) {
    return (fortune = "An exciting opportunity is coming your way.");
  } else {
    return (fortune = "Prepare for a wonderful surprise!");
  }

  console.log(fortune);
};

fortuneTeller();
