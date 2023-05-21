document.getElementById("change-heading-btn").onclick = function () {
  document.getElementById("main-heading").innerHTML = "Main heading changed";
};

let username;
document.getElementById("name-submit-btn").onclick = function () {
  username = document.getElementById("name-input").value;
  document.getElementById("display-name").innerHTML = username;
};

let ele = document.getElementById("myTitle");
ele.style.backgroundColor = "lightgreen";

let fruits = document.getElementById("fruits");
console.log(fruits);

//not sure working check again
// fruits.forEach((element) => {
//   if (element.checked) {
//     console.log(element.value);
//   }
// });

let friends = document.getElementsByTagName("li");
console.log(friends);
friends[1].style.backgroundColor = "lightgreen";

let dessert = document.getElementsByClassName("dessert");
console.log(dessert);

//add/change html elements
const nameTag = document.createElement("hi");
nameTag.innerHTML = "bro";
document.body.append(nameTag);

const myList = document.getElementById("fruity");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem); //or use prepend

//how to add to middle
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);

//add change css
const title = document.getElementById("myt");
title.style.backgroundColor = "blue";

//events
function doSth() {
  alert("Hi outline button clicked!!!");
} //u can use onchange with textboxes

//addEventListener
const innerDiv = document.getElementById("innerDiv");
innerDiv.addEventListener("mouseover", changeRed);

function changeRed() {
  innerDiv.style.backgroundColor = "red";
}
