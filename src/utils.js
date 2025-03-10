function getImages(r) {
  let images = {};
  r.keys().forEach(key =>{
    images[key.replace("./","")] = r(key);
  });
  return images;
}

function CreateElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

export {getImages, CreateElement};