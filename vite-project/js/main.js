import { t } from "./themes.js";
import { Menu } from "./array.js";
const DOM = {
  root: document.documentElement,
  lightbutton: document.getElementById("light"),
  darkbutton: document.getElementById("dark"),
  main: document.getElementById("main"),
  food: document.getElementById("food"),
  drink: document.getElementById("drink"),
  price: document.getElementById("price"),
};

document.querySelector(".btn").addEventListener("click", function(){
    document.body.classList.add("dark");
})



function buildMain() {
  Menu.forEach((food) => {
    DOM.main.insertAdjacentHTML(
      "beforeend",
      `<div class="box">
      <img class="img" src="${food.img}"></img>
    <p id="text">Food: ${food.name}</p>
    <p id="text">Meal Type: ${food.meal}</p>
    <p id="text">Price: $${food.price}</p>
   </div>`
    );
  });
}
buildMain();

let alreadyFilteredbyBreakfast = false;
DOM.breakfast.addEventListener("click", function () {
  DOM.main.innerHTML = "";
  if (!alreadyFilteredbyBreakfast) {
    Menu.filter((food) => food.meal.includes("Breakfast")).forEach((food) => {
      DOM.main.insertAdjacentHTML(
        "beforeend",
        `<div class="box">
    <img class="img" src="${food.img}"></img>
  <p id="text">Food: ${food.name}</p>
  <p id="text">Meal Type: ${food.meal}</p>
  <p id="text">Price: $${food.price}</p>
 </div>`
      );
      alreadyFilteredbyBreakfast = true;
    });
  } else {
    buildMain();
    alreadyFilteredbyBreakfast = false;
  }
});

let alreadyFilteredbyLunch = false;
DOM.lunch.addEventListener("click", function () {
  DOM.main.innerHTML = "";
  if (!alreadyFilteredbyLunch) {
    Menu.filter((food) => food.meal.includes("Lunch")).forEach((food) => {
      DOM.main.insertAdjacentHTML(
        "beforeend",
        `<div class="box">
    <img class="img" src="${food.img}"></img>
  <p id="text">Food: ${food.name}</p>
  <p id="text">Meal Type: ${food.meal}</p>
  <p id="text">Price: $${food.price}</p>
 </div>`
      );
      alreadyFilteredbyLunch = true;
    });
  } else {
    buildMain();
    alreadyFilteredbyLunch = false;
  }
});

let alreadyFilteredbyDinner = false;
DOM.dinner.addEventListener("click", function () {
  DOM.main.innerHTML = "";
  if (!alreadyFilteredbyDinner) {
    Menu.filter((food) => food.meal.includes("Dinner")).forEach((food) => {
      DOM.main.insertAdjacentHTML(
        "beforeend",
        `<div class="box">
    <img class="img" src="${food.img}"></img>
  <p id="text">Food: ${food.name}</p>
  <p id="text">Meal Type: ${food.meal}</p>
  <p id="text">Price: $${food.price}</p>
 </div>`
      );
      alreadyFilteredbyDinner = true;
    });
  } else {
    buildMain();
    alreadyFilteredbyDinner = false;
  }
});

let alreadyFilteredbyPrice = false;
DOM.price.addEventListener("click", function () {
  DOM.main.innerHTML = "";
  if (!alreadyFilteredbyPrice) {
    Menu.filter((food) => food.price < 5).forEach((food) => {
      DOM.main.insertAdjacentHTML(
        "beforeend",
        `<div class="box">
    <img class="img" src="${food.img}"></img>
  <p id="text">Food: ${food.name}</p>
  <p id="text">Meal Type: ${food.meal}</p>
  <p id="text">Price: $${food.price}</p>
 </div>`
      );
      alreadyFilteredbyPrice = true;
    });
  } else {
    buildMain();
    alreadyFilteredbyPrice = false;
  }
});
