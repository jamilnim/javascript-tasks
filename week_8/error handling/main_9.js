/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function checkBrokenURI(malformedURI) {
    try {
      return decodeURIComponent(malformedURI);
    } catch (error) {
      console.log("URIError");
    }
  }
  
  console.log(checkBrokenURI("https%3A%2F%2Fexample.com"));
  console.log(checkBrokenURI("%"));