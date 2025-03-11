const loadMenu = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "This is menu page";
  content.appendChild(heading);
}

export {loadMenu};