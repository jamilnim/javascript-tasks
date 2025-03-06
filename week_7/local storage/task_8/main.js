/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here

const counter={
    count:0
};

localStorage.setItem('counter',JSON.stringify(counter))

function incrementCounter(){
    const updateCounter=JSON.parse(localStorage.getItem('counter'))
    updateCounter.count=updateCounter.count+=1
    console.log(updateCounter)
    localStorage.setItem('counter',JSON.stringify(updateCounter))
    const updateCounter2=JSON.parse(localStorage.getItem('counter'))
    updateCounter2.count=updateCounter2.count+=1
    console.log(updateCounter2)
}

incrementCounter()