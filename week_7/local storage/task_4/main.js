/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here

userSettings = {
    theme: "dark",
    language: "English"
  };

  function saveTolocalStorage(){

    const userSettingsString=JSON.stringify(userSettings)
    console.log(userSettingsString)
    localStorage.setItem('userSettings',userSettingsString)
    const userSettingsRetrive=JSON.parse(localStorage.getItem('userSettings'))
    console.log(userSettingsRetrive)

  }
  saveTolocalStorage()