
// Exercise 3: Log array items with their types using mixedValues array
// const mixedValues = [42, 'Hello', true, { name: 'Fox' }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here

const mixedValues = [42, 'Hello', true, { name: 'Fox' }, null, undefined];

let i=0

for (i=0;i<(mixedValues.length);i++){
    console.log("Item:",mixedValues[i],"Index:",i,"Type:",typeof(mixedValues[i]))
}