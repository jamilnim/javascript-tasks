/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.log("Invalid JSON format");
    }
  }

console.log(parseJSON('{"name": "Alice", "age": 25}'));
console.log(parseJSON("Invalid JSON text"));