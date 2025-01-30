/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

// 1st try

let validatePassword = () => {
  let password;
  password = prompt("please input a password");
  while (password !== "correct123") {
    password = prompt("Tray again");
  }
  console.log("Access granted!!");
};
validatePassword();

// 2nd try

// let validatePassword = () => {
//   let password;
//   do {
//     passwordassword = prompt("please input a password");
//     alert("try again");
//   } while (password !== "correct123");
// }
// console.log("access granted");

// validatePassword();
