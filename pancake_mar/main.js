const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const customerName = document.getElementById("customerName");
const summaryText = document.getElementById("summaryText");

const changeHandler = (event) => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const toppingSelection = [
    ...document.querySelectorAll(".topping:checked.vale"),
  ];

  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  let deliveryPrice = 0;
  const addDeliveryPrice = document.querySelector(".delivery:checked");
  if (addDeliveryPrice) {
    deliveryPrice = parseFloat(addDeliveryPrice.dataset.price);
  }

  totalPriceDisplay.textContent = `${
    basePrice + toppingTotal + extraTotal + deliveryPrice
  }€`;
  totalPriceBanner.textContent = `${
    basePrice + toppingTotal + extraTotal + deliveryPrice
  }€`;
  summaryText.textContent = `Customer Name: ${customerName.value} 
your order is a ${pancakeType.value} toppings are ${toppingSelection}`;
};

pancakeForm.addEventListener("change", changeHandler);
