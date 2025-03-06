const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");
const orderId = Date.now();
const orderIdDesplay = document.getElementById("orderID");

const changeHandler = (event) => {
  // Oder id add
  orderIdDesplay.textContent = orderId;

  // base price selection with drop down
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  // topping selection with check box
  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const toppingSelection = [
    ...document.querySelectorAll(".topping:checked.vale"),
  ];

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

  //   summaryText.textContent = `Customer Name: ${customerName.value}
  // your order is a ${pancakeType.value} toppings are ${toppingSelection}`;
};

pancakeForm.addEventListener("change", changeHandler);
