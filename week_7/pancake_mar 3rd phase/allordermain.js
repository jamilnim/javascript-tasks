// recover arry from local drive
const allordersretrive = JSON.parse(localStorage.getItem("allOrders"));

const orderList = document.querySelector("#orderList");
const searchInput = document.querySelector("#searchInput");

// desplay orders

function displayOrders(allorders) {
  orderList.innerHTML = "";
  for (const order of allorders) {
    const li = document.createElement("li");
    li.innerHTML = `Customer name: ${order.customerName} <br> Order ID:${order.orderID}<br> Pan Cake type: ${order.PancakeType}<br>toppings: ${order.toppings} <br> Extras: ${order.extras} <br> Delivery Method: ${order.deliveryMethod} <br> TotalPrice: ${order.TotalPrice} <br> status: ${order.status} <br>
    <select id='statusOption'><option value='delivered'>delivered</opiton><option value='waiting'>Waiting</opiton><option value='ready'>Ready</opiton>
    </select>`;

    orderList.appendChild(li);
  }
}

function selectingStatus() {
  allordersretrive.forEach((order) => {
    document.getElementById("statusOption").selectedOptions[0].value =
      order.status;
  });
  console.log(order.status);
  displayOrders(allordersretrive);
  statusOption();
}

// search function
function seachOrder() {
  const searchorderbyName = searchInput.value.toLowerCase();
  const filterOrder = allordersretrive.filter((order) =>
    order.customerName.toLowerCase().includes(searchorderbyName)
  );
}

displayOrders(allordersretrive);
searchInput.addEventListener("input", seachOrder);

document
  .getElementById("statusOption")
  .addEventListener("change", selectingStatus);
