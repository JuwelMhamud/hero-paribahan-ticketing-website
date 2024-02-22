const allseats = document.getElementsByClassName("seat");

for (const seat of allseats) {
  seat.addEventListener("click", function (event) {
    const firstCount = converToNumber("seat-count");
    if (firstCount + 1 > 4) {
      alert("You cannot select more than 4 seat at a time.");
      return;
    }

    seat.classList.add("text-white");
    seat.classList.add("bg-[#1DD100]");

    const seatName = event.target.innerText;

    const seatDetails = document.getElementById("table-body");
    const tableRow = document.createElement("tr");

    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("td");

    data1.innerText = seatName;
    data2.innerText = "Economy";
    data3.innerText = "550";

    tableRow.appendChild(data1);
    tableRow.appendChild(data2);
    tableRow.appendChild(data3);

    seatDetails.appendChild(tableRow);

    newTotalPrice(550);
    newGrandPrice();

    const seatcount = converToNumber("seat-count");
    document.getElementById("seat-count").innerText = seatcount + 1;

    const leftSeat = converToNumber("left-seat");
    document.getElementById("left-seat").innerText = leftSeat - 1;
  });
}

function converToNumber(id) {
  textNum = document.getElementById(id).innerText;
  number = parseInt(textNum);
  return number;
}

function newTotalPrice(value) {
  const TotalPrice = converToNumber("total-price");
  const sum = TotalPrice + value;
  document.getElementById("total-price").innerText = sum;
}

function newGrandPrice(status) {
  const TotalPrice = converToNumber("total-price");
  if (status == undefined) {
    document.getElementById("grand-total").innerText = TotalPrice;
  } else {
    const couponcode = document.getElementById("couponcode").value;

    if (couponcode === "NEW15") {
      const discount = (TotalPrice * 15) / 100;
      const updateGrandPrice = TotalPrice - discount;
      document.getElementById("grand-total").innerText = updateGrandPrice;
      document.getElementById("input-level").classList.add("hidden");
    } else if (couponcode === "Couple 20") {
      const discount = (TotalPrice * 20) / 100;
      const updateGrandPrice = TotalPrice - discount;
      document.getElementById("grand-total").innerText = updateGrandPrice;
      document.getElementById("input-level").classList.add("hidden");
    } else {
      alert("Please enter valid coupon code...");
    }
  }
}
