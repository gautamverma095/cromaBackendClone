document.getElementById("gvthumb1gv").addEventListener("click", imgSlide1);
function imgSlide1() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1642154674/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247450_vjshsw.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb2gv").addEventListener("click", imgSlide2);
function imgSlide2() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1642154674/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247450_2_rjakq1.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb3gv").addEventListener("click", imgSlide3);
function imgSlide3() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1642154674/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247450_4_nv3emf.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb4gv").addEventListener("click", imgSlide4);
function imgSlide4() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1642154673/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247450_6_jb1hiw.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb5gv").addEventListener("click", imgSlide5);
function imgSlide5() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1642154674/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247450_7_dqi8lk.png/mxw_1440,f_auto"
    );
}

var arr = JSON.parse(localStorage.getItem("products")) || [];
function addingItem() {
  console.log("here");

  var obj = {
    title: "pTron Bassbuds Pixel In-Ear Truly Wireless Earbuds",
    id: "229945",
    price: 1399.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1642154674/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247450_2_rjakq1.png/mxw_1440,f_auto",
  };
  arr.push(obj);
  chgCart();
  localStorage.setItem("products", JSON.stringify(arr));
  // window.location.href = "sixth.html"
}
function chgCart() {
  document.querySelector("#cartValu").innerHTML = arr.length;
}

chgCart();