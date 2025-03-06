/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here

const userProfile = {
    username: "jamilnim",
    email: "jamilnimbook2@gmail.com",
    preferences: {
      theme: "light",
      notifications: true
    }
  };

  localStorage.setItem('userProfile',JSON.stringify(userProfile))
  const userProfileRetrive=JSON.parse(localStorage.getItem('userProfile'))
  userProfileRetrive.preferences.theme='dark'
  console.log(userProfileRetrive)
