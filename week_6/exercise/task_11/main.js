/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
  { username: "jami12", email: "jami12@example.com", isAdmin: false },
  { username: "sumo12", email: "sumo12@example.com", isAdmin: true },
  { username: "kis12", email: "kis12@example.com", isAdmin: false },
  { username: "bab12", email: "bab12@example.com", isAdmin: true },
  { username: "chabi12", email: "chabi12@example.com", isAdmin: false },
];

// with forEach
function adminList(){
userProfiles.forEach(userprofile=> {if(userprofile.isAdmin===true){console.log(userprofile.username)} })
}

adminList()

// for i

function adminlist2(){
for (let i=1; i<userProfiles.length;i++){
    if(userProfiles[i].isAdmin===true){
        console.log(userProfiles[i].username)
    }
}
}
adminlist2()