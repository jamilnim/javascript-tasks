const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");

const orderIdDesplay = document.getElementById("orderID");
const seeOrderBtn = document.querySelector("#seeOrder");
const allOrders = JSON.parse(localStorage.getItem("allOrders"));
const saveBtn = document.querySelector("#saveBtn");

const changeHandler = (event) => {
  // base price selection with drop down
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  // topping selection with check box
  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  // extra selection with check box
  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );
  // delivery seletion with redio box
  let deliveryPrice = 0;
  const addDeliveryPrice = document.querySelector(".delivery:checked");
  if (addDeliveryPrice) {
    deliveryPrice = parseFloat(addDeliveryPrice.dataset.price);
  }

  // desplay total price in bottom text area
  totalPriceDisplay.textContent = `${
    basePrice + toppingTotal + extraTotal + deliveryPrice
  }€`;

  //  desplay total price is left side round benner
  totalPriceBanner.textContent = `${
    basePrice + toppingTotal + extraTotal + deliveryPrice
  }€`;
};

const ordersObject = {
  customerName: "",
  orderID: "",
  PancakeType: "",
  toppings: [],
  extras: [],
  deliveryMethod: "",
  TotalPrice: "",
  status: "",
};

// Function to generate order summary with button click
function orderSummary() {
  if (customerName.value !== "") {
    const orderID = 0;
    ordersObject.customerName = customerName.value;
    ordersObject.orderID = Date.now();
    ordersObject.PancakeType = pancakeType.value;
    ordersObject.toppings = [];
    const toppingsChecked = document.querySelectorAll(".topping:checked");
    toppingsChecked.forEach((topping) =>
      ordersObject.toppings.push(topping.value)
    );
    ordersObject.extras = [];
    const extrasChecked = document.querySelectorAll(".extra:checked");
    extrasChecked.forEach((extra) => ordersObject.extras.push(extra.value));

    const deliveryMood = document.querySelector(".delivery:checked");
    ordersObject.deliveryMethod = deliveryMood.value;

    ordersObject.TotalPrice = totalPriceDisplay.textContent;
    ordersObject.status = "waiting";

    summaryText.innerHTML = `Customer name:${ordersObject.customerName} <br> Order ID:${ordersObject.orderID} <br> Pancake Type: ${ordersObject.PancakeType} <br>Toppings: ${ordersObject.toppings} <br>Extras: ${ordersObject.extras} <br>Mood of Delivery: ${ordersObject.deliveryMethod} <br>Total Price: ${ordersObject.TotalPrice} <br>Status: ${ordersObject.status}`;
  } else {
    alert("Please input order");
  }
}

console.log("All Orders: ", allOrders);

// save order function and form reset 

function saveorders() {
  if (ordersObject.customerName !== "") {
    allOrders.push({ ...ordersObject });
    console.log(allOrders);
    document.getElementById("pancakeForm").reset();

    //  clean the existing object

    ordersObject.customerName = "";
    ordersObject.orderID = "";
    ordersObject.PancakeType = "";
    ordersObject.toppings = [];
    ordersObject.extras = [];
    ordersObject.deliveryMethod = "";
    ordersObject.TotalPrice = "";
    ordersObject.status = "waiting";

    summaryText.textContent = "Please input new order";
    alert('Your order is confirmed')

    localStorage.setItem("allOrders", JSON.stringify(allOrders));
  } else {
    alert("No order to save");
  }
}

pancakeForm.addEventListener("change", changeHandler);
seeOrderBtn.addEventListener("click", orderSummary);
saveBtn.addEventListener("click", saveorders);
