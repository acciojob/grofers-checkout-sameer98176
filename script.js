const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    total += parseFloat(p.innerText);
  });
  let existing = document.getElementById("ans");
  if (existing) {
    existing.innerText = total;
    return;
  }
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  td.setAttribute("colspan", "2");
  td.setAttribute("id", "ans");
  td.innerText = total;

  tr.appendChild(td);
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);