const content = document.querySelector("#content");


const loadMenu = () => {
  const headingText = document.createElement("h1");
  headingText.textContent = "This is menu page";
  content.appendChild(headingText);
}

export {loadMenu};