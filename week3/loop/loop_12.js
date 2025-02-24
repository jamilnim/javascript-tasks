/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

let buildGroceryList = () => {
  let grocery = "";
  let count = 0;
  while (grocery !== "done") {
    count++;
    grocery = prompt("Please input groceries you need");
    console.log(count, grocery);
  }
};

buildGroceryList();
// how not to include done  