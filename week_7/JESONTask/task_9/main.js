/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

const shopingCart='{"items":[{"name":"Laptop","price":1200},{"name":"Headphones","price":200},{"name":"Mouse","price":50}]}'

const shopingCartObject=JSON.parse(shopingCart)
console.log(shopingCartObject)

let totalPrice=0
shopingCartObject.items.forEach(item=>(totalprice=totalPrice+=item.price)) 
console.log('total price :',totalPrice)
