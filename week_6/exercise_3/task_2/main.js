/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
         changeEmail(newEmail){
            this.email=newEmail;
            console.log(`Username ${this.name} New Email: ${this.email}`);
        }
    }


const user2=new User ('jamil','jamilnimbook@gmail.com')

console.log(user2)
user2.changeEmail('jamilnimbook2@gmail.com')
console.log(user2)
user2.changeEmail(`jamilnim@gmail.com`)
console.log(user2)
