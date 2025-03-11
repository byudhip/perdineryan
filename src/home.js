import { CreateElement, getImages } from "./utils.js";

const images = getImages(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const loadHome = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const promo = CreateElement("h2", null, null, "Promo");
  content.appendChild(promo);

  const boxContent = [
    {
      asset: images["seasonal.png"],
      headline: "Saisonry",
      text: "Taste the season! Limited-time flavors, only while they last!",
    },
    {
      asset: images["social-media-promo.png"],
      headline: "Saturday Socials",
      text: "Snap. Tag. Dine. Share your meal & enjoy a special treat!",
    },
    {
      asset: images["happy-hour.png"],
      headline: "It's Wine'sday",
      text: "Midweek made better—perfect pairings at a perfect price!",
    },
  ];

  boxContent.forEach(({ asset, headline, text }) => {
    const box = CreateElement("div", null, "box");
    content.appendChild(box);
    const image = CreateElement("img", null, "box-img");
    image.src = asset;
    box.appendChild(image);
    const boxText = CreateElement("div", null, "box-text");
    box.appendChild(boxText);
    const headlineText = CreateElement("h3", null, null, headline);
    boxText.appendChild(headlineText);
    const description = CreateElement("p", null, null, text);
    boxText.appendChild(description);
  });

  const testimony = CreateElement(
    "p", null,
    "testimony",
    "Absolutely obsessed! The vibe is effortlessly chic, and every dish is as stunning as it is delicious. The truffle mushroom risotto was pure perfection, and the cocktails? Next level. A must-visit spot for foodies and Instagram lovers alike!"
  );
  const testimonyGiver = CreateElement("p", null, null, "- Amanda");
  const box = CreateElement("div", null, "testimony-box");
  content.appendChild(box);
  box.appendChild(testimony);
  box.appendChild(testimonyGiver);
  console.log(images);
};

function initHome() {
  const body = document.querySelector("body");
  const header = CreateElement("div", null, "header");

  body.appendChild(header);

  const nav = CreateElement("nav");
  header.appendChild(nav);

  const ul = CreateElement("ul");
  nav.appendChild(ul);

  const buttons = [
    { text: "Home", class: "home" },
    { text: "Menu", class: "menu" },
    { text: "Contact", class: "contact" },
  ];

  buttons.forEach(({ text, class: className }) => {
    const li = CreateElement("li");
    const button = CreateElement("button", null, className, text);
    li.appendChild(button);
    ul.appendChild(li);
  });
  const content = CreateElement("div", "content", null);

  body.appendChild(content);
  loadHome();
}

export { loadHome, initHome };
