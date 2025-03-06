/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

userSettings = {
    theme: "dark",
    language: "English"
  };

  userSettings2 = {
    theme: "light",
    language: "Bangla"
  };

  localStorage.setItem('userSettings',JSON.stringify(userSettings))
  localStorage.setItem('userSettings2',JSON.stringify(userSettings2))


  function getFromLocalStorage(key){
    const userSettingsRetrive=JSON.parse(localStorage.getItem(key))
    console.log(userSettingsRetrive)
  }

  getFromLocalStorage('userSettings')
  getFromLocalStorage('userSettings2')
