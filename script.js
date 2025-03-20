let monthsName = [];
let list = document.querySelector(".list");
function displaymonths() {
    monthsName.forEach(function (i) {
    list.innerHTML += `<li>${i} </li>`;
  });
}
displaymonths();

function addmonths() {
  let newmonth = document.querySelector(".months-name input").value;
  if (newmonth) {
    monthsName.push(newmonth);
    list.innerHTML = "";
    displaymonths();
    document.querySelector(".months-name input").value = "";
  } else {
    alert("Please enter  months name");
  }
}
