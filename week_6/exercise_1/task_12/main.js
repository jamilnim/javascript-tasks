/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here

const orders = [
    { orderId: 101, customerName: "Alice Johnson", totalAmount: 250.75, status: "pending" },
    { orderId: 102, customerName: "Bob Smith", totalAmount: 120.50, status: "completed" },
    { orderId: 103, customerName: "Charlie Brown", totalAmount: 89.99, status: "pending" },
    { orderId: 104, customerName: "David Lee", totalAmount: 340.00, status: "completed" },
    { orderId: 105, customerName: "Eva Green", totalAmount: 199.25, status: "pending" }
];

function pendingOrder(){
    orders.forEach(order=>{if (order.status==="pending"){console.log(order.orderId)}})
}

pendingOrder()