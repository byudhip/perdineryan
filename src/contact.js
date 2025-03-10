const loadContact = () => {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "This is contact page";
  content.appendChild(heading);
}

export {loadContact};