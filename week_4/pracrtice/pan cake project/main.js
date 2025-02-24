// global veriable 

const cakeOption1 = document.getElementById("cakeOption1");
const cakeOption2 = document.getElementById("cakeOption2");
const cakeOption3 = document.getElementById("cakeOption3");

const sugerType = document.getElementById("sugerType");

const prieBanner = document.getElementById("prieBanner");

function panCakeOption() {
  let totalprice;

  // rado button action 
  if (cakeOption1.checked) {
    totalprice = 15;
  } else if (cakeOption2.checked) {
    totalprice = 16;
  } else {
    totalprice = 17;
  }
  console.log(totalprice);

  totalprice += Number(sugerType.value);
  console.log(totalprice);

  prieBanner.innerText = totalprice;

  
}


// calling all action 
cakeOption1.addEventListener("change", panCakeOption);
cakeOption2.addEventListener("change", panCakeOption);
cakeOption3.addEventListener("change", panCakeOption);
sugerType.addEventListener("change", panCakeOption);


