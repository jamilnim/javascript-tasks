// /* Task 6: Debug JSON Parsing
// Should parse a JSON string into an object.
// */

function parseJson(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.log("Error parsing JSON");
    }
  }
  
  // Debug & Test
  console.log(parseJson('{"name": "Alice", "age": 25}')); // Expected: { name: "Alice", age: 25 }
  console.log(parseJson("{ name: 'Alice', age: 25 }")); // Expected: Error (invalid JSON)
  