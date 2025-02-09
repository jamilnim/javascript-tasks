// coding for radio button

const cakeOprion1 = document.getElementById("cakeOption1");
const cakeOprion2 = document.getElementById("cakeOption2");
const cakeOprion3 = document.getElementById("cakeOption3");

let basePrice = document.getElementById("basePrice");

function panCakeOprion() {
  if (cakeOprion1.checked) {
    document.getElementById("basePrice").textContent = "15";
  } else if (cakeOprion2.checked) {
    document.getElementById("basePrice").textContent = "16";
  } else {
    document.getElementById("basePrice").textContent = "17";
  }
}

cakeOprion1.addEventListener("change", panCakeOprion);
cakeOprion2.addEventListener("change", panCakeOprion);
cakeOprion3.addEventListener("change", panCakeOprion);

//  coding for additional options dropdown

const sugerType = document.getElementById("SugerType");

function sugerSelect() {
  let basePrice = Number(document.getElementById("basePrice").textContent);

  if (
    sugerType.value === "granulatedSugar" &&
    basePrice >= 15 &&
    basePrice <= 17
  ) {
    document.getElementById("basePrice").textContent = basePrice + 2;
  } else if (
    sugerType.value === "brownSugar" &&
    basePrice >= 15 &&
    basePrice <= 17
  ) {
    document.getElementById("basePrice").textContent = basePrice + 1;
  } else if (
    sugerType.value === "powderedSugar" &&
    basePrice >= 15 &&
    basePrice <= 17
  ) {
    document.getElementById("basePrice").textContent = basePrice + 1;
  } else {
    alert("You have not select base cake option");
  }
}

sugerType.addEventListener("change", sugerSelect);
