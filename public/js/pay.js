// let testData = JSON.parse(localStorage.getItem("cart"))||[]
var totalCost = JSON.parse(localStorage.getItem("totalCost"));
function openBox(el) {
  let tempBox = document.querySelector(el);
  let btn = document.querySelector(el + "Btn");
  if (tempBox.classList.contains("off")) {
    btn.classList.add("rotate");
    tempBox.classList.remove("off");
  } else {
    tempBox.classList.add("off");
    btn.classList.remove("rotate");
  }
}
cartChange();
function cartChange() {
  document.querySelector("#price").innerHTML = `₹${totalCost}`;
  document.querySelector("#totalCost").innerHTML = `₹${totalCost}`;
}
// mapCart(testData);
