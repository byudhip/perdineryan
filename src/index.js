import "./styles.css";
import * as home from "./home.js";
import * as utils from "./utils.js";

home.initHome();  
const navMenu = document.querySelector("nav");
navMenu.addEventListener("click", utils.buttonHandler);


