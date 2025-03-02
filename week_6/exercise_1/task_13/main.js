/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here

const smartPhoneCollection = [
    { brand: "Samsung", model: "Galaxy S23", batteryLife: "24 hours", is5GEnabled: true },
    { brand: "Apple", model: "iPhone 14 Pro", batteryLife: "22 hours", is5GEnabled: false},
    { brand: "Google", model: "Pixel 7", batteryLife: "20 hours", is5GEnabled: false },
    { brand: "OnePlus", model: "OnePlus 11", batteryLife: "18 hours", is5GEnabled: true },
    { brand: "Xiaomi", model: "Mi 12", batteryLife: "19 hours", is5GEnabled: true }
];

function is5GEnabled (){

    smartPhoneCollection.forEach(smartPhone=> {if (smartPhone.is5GEnabled===true){
        console.log(`${smartPhone.brand} ${smartPhone.model} - This phone supports 5G`)
    }else {console.log(`${smartPhone.brand} ${smartPhone.model} - This phone does not supports 5G`)}
})
}

is5GEnabled()