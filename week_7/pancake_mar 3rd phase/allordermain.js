// recover arry from local drive
let allordersretrive;
function getAllOrders() {
  allordersretrive = JSON.parse(localStorage.getItem("allOrders"));
}
getAllOrders();
// const allordersretrive = JSON.parse(localStorage.getItem("allOrders"));
console.log("All Orders : ", allordersretrive);

const orderList = document.querySelector("#orderList");
const searchInput = document.querySelector("#searchInput");

// desplay orders

function displayOrders(allorders) {
  orderList.innerHTML = "";
  allorders.forEach((order, index) => {
    const li = document.createElement("li");
    li.innerHTML = `Customer name: ${order.customerName} <br> Order ID:${
      order.orderID
    }<br> Pan Cake type: ${order.PancakeType}<br>toppings: ${
      order.toppings
    } <br> Extras: ${order.extras} <br> Delivery Method: ${
      order.deliveryMethod
    } <br> TotalPrice: ${order.TotalPrice} <br> status: ${order.status} <br>


    <select class='statusOption' value=${
      order.status
    } placeholder="Select status"><option value='delivered'>${
      order.status || "Select status"
    }</opiton><option value='delivered'>delivered</opiton><option value='waiting'>Waiting</opiton><option value='ready'>Ready</option>
    </select>`;

    orderList.appendChild(li);

    const statusOptionsDropdown = li.querySelector(".statusOption");

    statusOptionsDropdown.addEventListener("change", function () {
      selectOrderStatus(index, this.value);

      if ((order.status = "ready")) {
      }
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

displayOrders(allordersretrive);
searchInput.addEventListener("input", seachOrder);
