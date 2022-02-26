var testData = JSON.parse(localStorage.getItem("products")) || [];

var mainCon = document.querySelector("#mainCon");
var emCart = document.querySelector("#emCart");
var totalCost = 0;
var prTab = document.querySelector("#cardPro");
function mapCart(dta) {
  prTab.innerHTML = null;
  totalCost = 0;
  dta.forEach(({ image, title, id, price }) => {
    let proCard = document.createElement("div");
    let prdetail = document.createElement("div");
    let del = document.createElement("div");
    del.setAttribute("class", "del");
    del.innerHTML = `<i class="far fa-trash-alt" style="color: #00e9bf"></i>`;
    del.addEventListener("click", () => {
      delCart(id);
    });
    let imgB = document.createElement("img");
    imgB.src = image;
    let h2 = document.createElement("h2");
    h2.innerHTML = title;
    let proID = document.createElement("p");
    proID.innerHTML = `Product Id: ${id}`;
    let proPrice = document.createElement("p");
    proPrice.innerHTML = `₹ ${price}`;
    totalCost += Number(price);
    proCard.setAttribute("class", "proCard");
    prdetail.setAttribute("class", "prdetail");
    prdetail.append(h2, proID, proPrice);
    proCard.append(imgB, prdetail, del);
    prTab.append(proCard);
  });
  cartChange();
}
function delCart(noman) {
  var flage = true;
  testData = testData.filter(({ id }) => {
    if (flage && id == noman) {
      flage = false;
      return false;
    }
    return true;
  });
  mapCart(testData);

  localStorage.setItem("products", JSON.stringify(testData));
}
function chgCart() {
  document.querySelector("#cartValu").innerHTML = testData.length;
}
function cartChange() {
  chgCart();

  if (testData.length == 0) {
    mainCon.classList.add("off");
    emCart.classList.remove("off");
  } else {
    emCart.classList.add("off");
    mainCon.classList.remove("off");
  }
  document.querySelector(
    "#cartValue"
  ).innerHTML = `Your Cart ( ${testData.length} items ) ₹${totalCost}`;
  document.querySelector("#price").innerHTML = `₹${totalCost}`;
  document.querySelector("#totalCost").innerHTML = `₹${totalCost}`;
}
function promoAply() {
  let coupan = document.querySelector("#coupan").value;
  if (coupan == "OFF30") totalCost = (totalCost / 100) * 70;
  cartChange();
}
function openPay() {
  localStorage.setItem("products", JSON.stringify(testData));
  localStorage.setItem("totalCost", JSON.stringify(totalCost));
  window.open("/routes/Address.html", "_self");
}
mapCart(testData);
