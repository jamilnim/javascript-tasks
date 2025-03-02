/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here

const shoppingCart = {
  items: [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Smartphone", price: 800, quantity: 2 },
    { name: "Headphones", price: 150, quantity: 1 },
    { name: "Mouse", price: 50, quantity: 3 },
    { name: "Keyboard", price: 100, quantity: 2 },
  ],
};

let totalPrice = 0;
function totalinventoryPrice() {
    shoppingCart.items.forEach((item) => {
    totalPrice = totalPrice +=(item.price * item.quantity);
  });
  console.log('total price of all items in the cart.',totalPrice);
}
totalinventoryPrice();
