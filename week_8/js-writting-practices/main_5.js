"use strict";
/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/

const DISCOUNT = 0.1;

function DiscounedPricet(price) {
  
    return price - (price * DISCOUNT);
}

console.log(DiscounedPricet(15)); 