const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const calculateTotal = () => {
  let totalPrice = parseFloat(pancakeType.value);

  console.log("event was triggered");

  toppings.forEach((topping) => {
    if (topping.checked) {
      totalPrice += parseFloat(topping.value);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      totalPrice += parseFloat(extra.value);
    }
  });

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeType.addEventListener("change", calculateTotal);

toppings.forEach((topping) =>
  topping.addEventListener("change", calculateTotal)
);
extras.forEach((extras) => extras.addEventListener("change", calculateTotal));

// -------------------------------------------------------------------------
// privous my work

// // codeing for pancake type options
// let totalPrice = Math(panCakeType) + Math(totalTopping);

// function pricePancakeOption() {
//   const panCakeType = document.getElementById("type").value;
// //   document.getElementById("totalPrice").textContent = panCakeType + "€";
// //   document.getElementById("totalPriceDisplay").textContent = panCakeType + "€";
// }

// document.getElementById("type").addEventListener("change", pricePancakeOption);

// function addTopping() {
//   let topping = document.getElementsByClassName("topping");
//   let totalTopping = " ";
//   let i = 0;
//   for (i = 0; i < topping.length; i++) {
//     if (topping[i].checked) {
//       totalTopping += topping[i].value;
//       document.getElementById("totalPrice").textContent =
//         panCakeType + totalTopping;
//     }
//   }
// }

// let topping = document.getElementsByClassName("topping");
// for (let i = 0; i < topping.length; i++) {
//   topping[i].addEventListener("change", addTopping);
// }

// document.getElementById("totalPrice").textContent = totalPrice + "€";
