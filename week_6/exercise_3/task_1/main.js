"use strict";
/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code her

class User {
    constructor(username, email) {
        (this.username = username),
            (this.email = email),
            (this.showInfo = function () {
                console.log(`my name us${this.username} my email is ${this.email}`);
            });
    }
}

let newUser = new User("jamilnim", "jamilnimbook2@gmail.com");
console.log(newUser);
console.log(newUser.showInfo());
console.log(User);
