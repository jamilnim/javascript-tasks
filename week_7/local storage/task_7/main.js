/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

const shoppingList = {
    items: ['milk']
  };

  localStorage.setItem('shoppingList',JSON.stringify(shoppingList))

  function shoppingListUpate(){
    const shoppingListRetrive=JSON.parse(localStorage.getItem('shoppingList'))
    shoppingListRetrive.items.push('fish','rice','chees')
    console.log(shoppingListRetrive)
    localStorage.setItem('shoppingList',JSON.stringify(shoppingListRetrive))
  }
  shoppingListUpate()