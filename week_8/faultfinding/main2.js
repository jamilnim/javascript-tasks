/* Task 2: Fix the Price Calculation  
Should multiply `price` by `quantity`.  
If `quantity` is missing, default to `1`.  
*/

function calculatePrice(price, quantity=1) {
    return price * quantity;
}

// Debug & Test
console.log(calculatePrice(10, 2)); // Expected: 20
console.log(calculatePrice(5)); // Expected: 5