import "./styles.css";
import * as home from "./home.js";
import * as menu from "./menu.js";
import * as contact from "./contact.js";

home.initHome();  

const content = document.querySelector("#content");
console.log("is working");
const navMenu = document.querySelector("nav");

const clearContent = () => {
  content.innerHTML = "";
}

navMenu.addEventListener("click", e => {
  if (e.target.classList.contains("home")){
    clearContent();
    home.loadHome();
  } else if (e.target.classList.contains("menu")) {
    clearContent();
    menu.loadMenu();
  } else if (e.target.classList.contains("contact")) {
    clearContent();
    contact.loadContact();
  }
})

