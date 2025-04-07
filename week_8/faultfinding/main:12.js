// /* Task 12: Debug Complex Function
// Should filter products under a given price from an array of products.
// */

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Mouse", price: 50 },
  ];
  
  function filterProducts(products, maxPrice) {
    return products
      .filter((product) => product.price < maxPrice)
      .map((product) => product.name);
  }
  
  // // Debug & Test
  console.log(filterProducts(products, 1000)); // Expected: ["Phone", "Mouse"]