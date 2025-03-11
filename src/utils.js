import * as home from "./home.js";
import * as menu from "./menu.js";
import * as contact from "./contact.js";

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
  if (e.target.classList.contains("home")) {
    home.loadHome();
  } else if (e.target.classList.contains("menu")) {
    menu.loadMenu();
  } else if (e.target.classList.contains("contact")) {
    contact.loadContact();
  }
}

export { getImages, CreateElement, buttonHandler };
