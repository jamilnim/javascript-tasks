'use strict';

/* Task 3: Fix Object Merging  
Combine `defaultSettings` with `userSettings`.  
*/

const defaultSettings = { theme: "light", fontSize: 14 };
const userSettings = { theme: "dark" };

// Fix this
const finalSettings = { ...userSettings , fontSize: 14 };

console.log(finalSettings); // Expected: { theme: "dark", fontSize: 14 }