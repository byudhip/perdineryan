import imgLoader from "./image-loader.js";

const images = imgLoader(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function CreateElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

function initHome() {
  const body = document.querySelector("body");
  const header = CreateElement("div", "header");

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
    const button = CreateElement("button", className, text);
    li.appendChild(button);
    ul.appendChild(li);
  });

  const content = CreateElement("div", "content");
  body.appendChild(content);

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
    const box = CreateElement("div", "box");
    content.appendChild(box);
    const image = CreateElement("img");
    image.src = asset;
    box.appendChild(image);
    const headlineText = CreateElement("h3", null, headline);
    box.appendChild(headlineText);
    const description = CreateElement("p", null, text);
    box.appendChild(description);
  });

  const testimony = CreateElement(
    "blockquote",
    "testimony",
    "Absolutely obsessed! The vibe is effortlessly chic, and every dish is as stunning as it is delicious. The truffle mushroom risotto was pure perfection, and the cocktails? Next level. A must-visit spot for foodies and Instagram lovers alike!"
  );
  // const home = `
  //     <div id="content">
  //      <h1 class="hook">This is homepage</h1>
  //      <div class="testimony">
  //       <p>I've never had something this good!</p>
  //      </div>
  //     </div>
  //     <div class="footer">
  //       <p>image by</p>
  //       <p>icon by</p>
  //     </div>
  //   </div>`;
  // document.body.innerHTML = home;
  console.log(images);
}

const loadHome = () => {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  const testiBox = document.createElement("div");
  testiBox.classList.add("testimony");
  testiBox.innerHTML = `<p>I've never had something this good!</p>`;
  heading.textContent = "This is home page";
  content.appendChild(heading);
  content.appendChild(testiBox);
};

export { initHome, loadHome };
