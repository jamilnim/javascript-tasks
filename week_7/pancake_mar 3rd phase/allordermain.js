// recover arry from local drive 
const allordersretrive = JSON.parse(localStorage.getItem("allOrders"));

const orderList = document.querySelector("#orderList");
const searchInput = document.querySelector("#searchInput");

// desplay orders

function displayOrders(allorders) {
  orderList.innerHTML = "";
  for (const order of allorders) {
    const li = document.createElement("li");
    li.innerHTML = `Customer name: ${order.customerName} <br> Order ID:${order.orderID}<br> Pan Cake type: ${order.PancakeType}<br>toppings: ${order.toppings} <br> Extras: ${order.extras} <br> Delivery Method: ${order.deliveryMethod} <br> TotalPrice: ${order.TotalPrice} <br> status: ${order.status}`;

    orderList.appendChild(li);
  }
}

// search function 
function seachOrder() {
  const searchorderbyName = searchInput.value.toLowerCase();
  const filterOrder = allordersretrive.filter((order) =>
    order.customerName.toLowerCase().includes(searchorderbyName)
  );
  displayOrders(filterOrder);
}

displayOrders(allordersretrive);
searchInput.addEventListener("input", seachOrder);
