'use strict';

/* 
Task 1: Delayed Greeting (Callback)  
---------------------------------------
Write a function `delayedGreet(name, callback)`  
After **2 seconds**, it should call `callback` with `"Hello, [name]!"`  
*/

function delayedGreet(name='name here', callback=console.log) {
    // Your code here
setTimeout(()=>{
    callback(`Hello, ${name}!`)
},2000);
}

delayedGreet('jamil',(message)=>{
    console.log(message)
})

delayedGreet()