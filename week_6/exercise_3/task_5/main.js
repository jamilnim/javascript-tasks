/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here

const desplayText = document.querySelector("#desplay");
const quantityInput = document.querySelector("#quantityInput");

const product = {
  name: "jamil",
  price: 2,
  quantity: 10,
  totalprice: 0,
};

function desplay() {
  product.quantity = Number(quantityInput.value);
  product.totalprice = product.price * product.quantity;
  desplayText.textContent = `${product.name} ${product.price} ${product.quantity} ${product.totalprice}`;
}

quantityInput.addEventListener("input", desplay);
