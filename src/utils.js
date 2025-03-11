import * as home from "./home.js";
import * as menu from "./menu.js";
import * as about from "./about.js";

function getImages(r) {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
}

function CreateElement(tag, id = null, className = null, textContent = null) {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

function buttonHandler(e) {
  if (e.target.classList.contains("home")||e.target.classList.contains("logo")) {
    home.loadHome();
  } else if (e.target.classList.contains("menu")) {
    menu.loadMenu();
  } else if (e.target.classList.contains("about")) {
    about.loadAbout();
  }
}

export { getImages, CreateElement, buttonHandler };
