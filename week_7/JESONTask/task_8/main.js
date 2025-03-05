/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here

const shoppingCart = {
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Headphones", price: 200 },
      { name: "Mouse", price: 50 }
    ]
  };

  const shoppingCartJson=JSON.stringify(shoppingCart)
  console.log(shoppingCartJson)