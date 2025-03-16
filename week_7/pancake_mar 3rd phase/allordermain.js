// recover arry from local drive
let allordersretrive;
function getAllOrders() {
  allordersretrive = JSON.parse(localStorage.getItem("allOrders"));
}
getAllOrders();

const orderList = document.querySelector("#orderList");
const searchInput = document.querySelector("#searchInput");
const searchByStatus = document.querySelector("#searchByStatus");
const counterText = document.querySelector("#counterText");

// desplay orders

function displayOrders(allorders) {
  orderList.innerHTML = "";
  allorders.forEach((order, index) => {
    const li = document.createElement("li");
    li.innerHTML = `Customer name: ${order.customerName} <br> Order ID:${
      order.orderID
    }<br> Pan Cake type: ${order.PancakeType}<br>Toppings: ${
      order.toppings
    } <br> Extras: ${order.extras} <br> Delivery Method: ${
      order.deliveryMethod
    } <br> TotalPrice: ${order.TotalPrice} <br> Status: ${order.status} <br>


    <select class='statusOption' value=${
      order.status
    } placeholder="Select status"><option value='delivered'>${
      order.status || "Select status"
    }</opiton><option value='delivered'>delivered</option><option value='waiting'>Waiting</opiton><option value='ready'>Ready</option>
    </select>`;

    orderList.appendChild(li);

    // Color base on status condition

    if (order.status === "ready") {
      li.classList.add("blue");
    } else if (order.status === "waiting") {
      li.classList.remove("blue") & li.classList.add("yellow");
    } else {
      li.classList.add("green");
    }

    const statusOptionsDropdown = li.querySelector(".statusOption");

    statusOptionsDropdown.addEventListener("change", function () {
      selectOrderStatus(index, this.value);

      localStorage.setItem("allOrders", JSON.stringify(allordersretrive));
      getAllOrders();

      countUrder();
    });
  });
}

function selectOrderStatus(index, orderStatus) {
  allordersretrive[index].status = orderStatus;
  localStorage.setItem("allOrders", JSON.stringify(allordersretrive));
  getAllOrders();
  displayOrders(allordersretrive);
}

// search function
function seachOrder() {
  const searchorderbyName = searchInput.value.toLowerCase();

  const filterOrder = allordersretrive.filter((order) =>
    order.customerName.toLowerCase().includes(searchorderbyName)
  );
  displayOrders(filterOrder);
}

// filter order by order status function
function filterbyStatus() {
  if (searchByStatus.value === "all") {
    displayOrders(allordersretrive);
  } else {
    let statusFilter = allordersretrive.filter(
      (order) => order.status === searchByStatus.value
    );
    displayOrders(statusFilter);
  }
}

// order counter function
function countUrder() {
  const totalOrder = allordersretrive.length;
  console.log(totalOrder);

  let statusFilterWaiting = allordersretrive.filter(
    (order) => order.status === "waiting"
  );

  const totalWaiting = statusFilterWaiting.length;
  console.log(totalWaiting);

  let statusFilterReady = allordersretrive.filter(
    (order) => order.status === "ready"
  );

  const totalReady = statusFilterReady.length;
  console.log(totalReady);

  let statusFilterdelivered = allordersretrive.filter(
    (order) => order.status === "delivered"
  );

  const totaldelivered = statusFilterdelivered.length;
  console.log(totaldelivered);

  counterText.textContent = `Waiting: ${totalWaiting} Ready:${totalReady} Delivered ${totaldelivered} Total Order ${totalOrder}`;
}

countUrder();

displayOrders(allordersretrive);
searchInput.addEventListener("input", seachOrder);

searchByStatus.addEventListener("change", filterbyStatus);
