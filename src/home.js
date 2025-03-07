const content = document.querySelector("#content");


const loadHome = () => {
  const headingText = document.createElement("h1");
  headingText.textContent = "This is home page";
  content.appendChild(headingText);
}

export {loadHome};