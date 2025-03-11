import "./styles.css";
import * as home from "./home.js";
import * as utils from "./utils.js";

home.initHome();  

document.body.addEventListener("click", utils.buttonHandler);


