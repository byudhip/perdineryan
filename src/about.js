import { CreateElement, getImages } from "./utils";

const images = getImages(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const loadAbout = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const aboutText = CreateElement("h2", null, "playfair-display-headline", "About");
  content.appendChild(aboutText);

  const aboutBox = CreateElement("div", null, "general-box");

  const exteriorImg = CreateElement("img");
  exteriorImg.src = images["exterior.png"];

  aboutBox.appendChild(exteriorImg);
  content.appendChild(aboutBox);

  const history = CreateElement(
    "p",
    null,
    null,
    `Founded in 2017, Perdineryan is more than just a place to eat—it’s an experience. Inspired by modern flavors, vibrant plating, and a love for community, we bring together globally inspired dishes with a contemporary twist. From bold fusion flavors to artfully plated creations, every dish is crafted to be as stunning as it is delicious. Whether you're here for a cozy dinner, a midweek wine pairing, or to capture the perfect foodie shot, we’re all about great taste, good vibes, and unforgettable moments. Join us and savor the experience.`
  );

  aboutBox.appendChild(history);

  const contactText = CreateElement("h2", null, "playfair-display-headline", "Contact");
  content.appendChild(contactText);

  const contactBox = CreateElement("div", null, "general-box");
  const restaurantName = CreateElement("h3", null, "playfair-display-headline", "Perdineryan");
  contactBox.appendChild(restaurantName);

  const address = [ "1234 Market Street", "Brooklyn, NY 11201", "inquiry@perdineryan.com", "Instagram: @perdineryan", "United States"];

  address.forEach(line => {
    const text = CreateElement("p", null, "plus-jakarta-sans", line);
    contactBox.appendChild(text);
  })

  content.appendChild(contactBox);
};

export { loadAbout };
