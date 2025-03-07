const content = document.querySelector("#content");


const loadContact = () => {
  const headingText = document.createElement("h1");
  headingText.textContent = "This is contact page";
  content.appendChild(headingText);
}

export {loadContact};