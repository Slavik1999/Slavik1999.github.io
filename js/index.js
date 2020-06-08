const hamburger = document.getElementById("habmurger");
const hidenMenu = document.getElementById("services_window");
const wrapper = document.getElementById("wrapper");
const hidenMenuSection1 = document.querySelectorAll(".section")[0];
const hidenMenuSection2 = document.querySelectorAll(".section")[1];
const mainSearch = document.getElementById("main_search");
const buttonContainer = document.getElementById("button_container");
let hidden = false;
hamburger.addEventListener("click", () => {
  if (hidden) {
    hidenMenu.style.visibility = "hidden";
    hidden = false;
  } else {
    hidenMenu.style.visibility = "unset";
    hidden = true;
  }
});

document.addEventListener("click", function (e) {
  let hamb = !e.target.contains(hamburger) ? true : false;
  let container1 = !e.target.contains(hidenMenuSection1) ? true : false;
  let container2 = !e.target.contains(hidenMenuSection2) ? true : false;
  let container3 = !e.target.contains(buttonContainer) ? true : false;
  if (hidden) {
    if (hamb && container1 && container2 && container3) {
      hidenMenu.style.visibility = "hidden";
      hidden = false;
    }
  }
});
