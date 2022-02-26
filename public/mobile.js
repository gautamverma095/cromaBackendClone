
// sliding js  start 

  let count = 1

  setInterval(()=>{
    document.getElementById('radio' + count).checked = true;
    count++

    if (count>7) {
        count = 1
    }
  },5000)
// sliding js  end

var arr =  JSON.parse(localStorage.getItem("products")) || [] ;

let  addingRau = () => {
  console.log("here")
  var newObj = {
     title : document.getElementById("rscart1").innerText,
     price : "1349",
     image : document.getElementById("img1").src,
     id:Math.floor(Math.random(12000 -500)*500)
  }
  arr.push(newObj);
  chgCart();
  localStorage.setItem("products",JSON.stringify(arr));
  // window.location.href = "mobile.html";
}

let  addingRau1 = () => {
  console.log("here")
  var newObj = {
     title : document.getElementById("title2").innerText,
     price : "3449",
     image : document.getElementById("img2").src,
     id:Math.floor(Math.random(12000 -500)*500)
  }
  arr.push(newObj);
  chgCart();
  localStorage.setItem("products",JSON.stringify(arr));
  // window.location.href = "mobile.html";
}

let  addingRau2 = () => {
  console.log("here")
  var newObj = {
     title : document.getElementById("title3").innerText,
     price : "949",
     image : document.getElementById("img3").src,
     id:Math.floor(Math.random(12000 -500)*500)
  }
  arr.push(newObj);
  chgCart();
  localStorage.setItem("products",JSON.stringify(arr));
  // window.location.href = "mobile.html";
}
let  addingRau3 = () => {
  console.log("here")
  var newObj = {
     title : document.getElementById("title4").innerText,
     price : "949",
     image : document.getElementById("img4").src,
     id:Math.floor(Math.random(12000 -500)*500)
  }
  arr.push(newObj);
  chgCart();
  localStorage.setItem("products",JSON.stringify(arr));
  // window.location.href = "mobile.html";
}
let  addingRau4 = () => {
  console.log("here")
  var newObj = {
     title : document.getElementById("title5").innerText,
     price : document.getElementById("price5").innerText,
     image : document.getElementById("img5").src,
     id:Math.floor(Math.random(12000 -500)*500)
  }
  arr.push(newObj);
  console.log('newObj:', newObj)
  chgCart();
  localStorage.setItem("products",JSON.stringify(arr));
  // window.location.href = "mobile.html";
}
function chgCart() {
  document.querySelector("#cartValu").innerHTML = arr.length;
}

chgCart();
