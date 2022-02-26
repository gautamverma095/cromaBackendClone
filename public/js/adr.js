var totalCost = JSON.parse(localStorage.getItem("totalCost"));
var testData = JSON.parse(localStorage.getItem("products")) || [];

var prTab = document.querySelector("#proTab");
function mapCart(dta) {
  prTab.innerHTML = null;

  dta.forEach(({ image, title, id, price }) => {
    let proCard = document.createElement("div");
    let prdetail = document.createElement("div");
    let imgB = document.createElement("img");
    imgB.src = image;
    let h2 = document.createElement("h2");
    h2.innerHTML = title;
    let proID = document.createElement("p");
    proID.innerHTML = `Product Id: ${id}`;
    let proPrice = document.createElement("p");
    proPrice.innerHTML = `₹ ${price}`;
    proCard.setAttribute("class", "proCard");
    prdetail.setAttribute("class", "prdetail");
    prdetail.append(h2, proID, proPrice);
    proCard.append(imgB, prdetail);
    prTab.append(proCard);
  });
  cartChange();
}
function cartChange() {
  document.querySelector("#price").innerHTML = `₹${totalCost}`;
  document.querySelector("#totalCost").innerHTML = `₹${totalCost}`;
}
mapCart(testData);
function openPay() {
  localStorage.setItem("totalCost", JSON.stringify(totalCost));
  window.open("/routes//paytm.html", "_self");
}
