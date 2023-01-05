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
  button: document.getElementById("btn"),
};

DOM.button.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

function makecard() {
  document.getElementById("dessert").innerHTML = "";
  Menu.filter((dessert) => dessert.img).forEach((dessert) => {
    document.getElementById("dessert").insertAdjacentHTML(
      "beforeend",
      `<div class="box" id=${dessert.name}>
      <div id= "card"><img class="w-class" src="${dessert.img}"/>
      <p>${dessert.name}</p>
      </div>    
      </div>`
    );
  });
}
makecard();

function makecheap() {
  document.getElementById("dessert").innerHTML = "";
  p.filter((dessert) => dessert.img)
    .filter((dessert) => dessert.price < 6.0)
    .forEach((dessert) => {
      document.getElementById("dessert").insertAdjacentHTML(
        "beforeend",
        `<div class="flexlr" id=${dessert.name}>
          <div><img class="w-image" src="${dessert.img}">
          <p>${dessert.name}</p>
          </div>
          </div>`
      );
    });
}
makecheap();

function makeexpensive() {
  document.getElementById("dessert").innerHTML = "";
  p.filter((dessert) => dessert.img)
    .filter((dessert) => dessert.price > 6.0)
    .forEach((dessert) => {
      document.getElementById("dessert").insertAdjacentHTML(
        "beforeend",
        `<div class="flexlr" id=${dessert.name}>
        <div><img class="w-image" src="${dessert.img}">
        <p>${dessert.name}</p>
        </div>
        </div>`
      );
    });
}
makeexpensive();
// function buildMain() {
//   Menu.forEach((food) => {
//     DOM.main.insertAdjacentHTML(
//       "beforeend",
//       `<div class="box">
//       <img class="img" src="${food.img}"></img>
//     <p id="text">Food: ${food.name}</p>
//     <p id="text">Meal Type: ${food.meal}</p>
//     <p id="text">Price: $${food.price}</p>
//    </div>`
//     );
//   });
// }
// buildMain();

// let alreadyFilteredbyBreakfast = false;
// DOM.breakfast.addEventListener("click", function () {
//   DOM.main.innerHTML = "";
//   if (!alreadyFilteredbyBreakfast) {
//     Menu.filter((food) => food.meal.includes("Breakfast")).forEach((food) => {
//       DOM.main.insertAdjacentHTML(
//         "beforeend",
//         `<div class="box">
//     <img class="img" src="${food.img}"></img>
//   <p id="text">Food: ${food.name}</p>
//   <p id="text">Meal Type: ${food.meal}</p>
//   <p id="text">Price: $${food.price}</p>
//  </div>`
//       );
//       alreadyFilteredbyBreakfast = true;
//     });
//   } else {
//     buildMain();
//     alreadyFilteredbyBreakfast = false;
//   }
// });

// let alreadyFilteredbyLunch = false;
// DOM.lunch.addEventListener("click", function () {
//   DOM.main.innerHTML = "";
//   if (!alreadyFilteredbyLunch) {
//     Menu.filter((food) => food.meal.includes("Lunch")).forEach((food) => {
//       DOM.main.insertAdjacentHTML(
//         "beforeend",
//         `<div class="box">
//     <img class="img" src="${food.img}"></img>
//   <p id="text">Food: ${food.name}</p>
//   <p id="text">Meal Type: ${food.meal}</p>
//   <p id="text">Price: $${food.price}</p>
//  </div>`
//       );
//       alreadyFilteredbyLunch = true;
//     });
//   } else {
//     buildMain();
//     alreadyFilteredbyLunch = false;
//   }
// });

// let alreadyFilteredbyDinner = false;
// DOM.dinner.addEventListener("click", function () {
//   DOM.main.innerHTML = "";
//   if (!alreadyFilteredbyDinner) {
//     Menu.filter((food) => food.meal.includes("Dinner")).forEach((food) => {
//       DOM.main.insertAdjacentHTML(
//         "beforeend",
//         `<div class="box">
//     <img class="img" src="${food.img}"></img>
//   <p id="text">Food: ${food.name}</p>
//   <p id="text">Meal Type: ${food.meal}</p>
//   <p id="text">Price: $${food.price}</p>
//  </div>`
//       );
//       alreadyFilteredbyDinner = true;
//     });
//   } else {
//     buildMain();
//     alreadyFilteredbyDinner = false;
//   }
// });

// let alreadyFilteredbyPrice = false;
// DOM.price.addEventListener("click", function () {
//   DOM.main.innerHTML = "";
//   if (!alreadyFilteredbyPrice) {
//     Menu.filter((food) => food.price < 5).forEach((food) => {
//       DOM.main.insertAdjacentHTML(
//         "beforeend",
//         `<div class="box">
//     <img class="img" src="${food.img}"></img>
//   <p id="text">Food: ${food.name}</p>
//   <p id="text">Meal Type: ${food.meal}</p>
//   <p id="text">Price: $${food.price}</p>
//  </div>`
//       );
//       alreadyFilteredbyPrice = true;
//     });
//   } else {
//     buildMain();
//     alreadyFilteredbyPrice = false;
//   }
// });
