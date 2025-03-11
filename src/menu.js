import { CreateElement, getImages } from "./utils.js";

const images = getImages(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const loadMenu = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const appetizerText = CreateElement("h2", null, null, "Appetizer");
  content.appendChild(appetizerText);

  const appetizerContent = [
    {
      asset: images["a-polenta-bites.png"],
      headline: "Crispy Truffle Polenta Bites",
      text: "Golden polenta cubes topped with a hint of truffle oil, shaved parmesan, and microgreens.",
    },
    {
      asset: images["a-tuna-tartare.png"],
      headline: "Tuna Tartare on Crispy Rice",
      text: "Sushi-grade tuna with a soy-ginger marinade, avocado crema, and spicy mayo on crispy rice cakes.",
    },
    {
      asset: images["a-charred-brussels-sprouts.png"],
      headline: "Charred Brussels Sprouts with Miso Glaze",
      text: "Roasted Brussels sprouts tossed in a sweet-savory miso glaze, garnished with sesame seeds and chili flakes.",
    },
  ];

  appetizerContent.forEach(({ asset, headline, text }) => {
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

  const mainCourseText = CreateElement("h2", null, null, "Main Course");
  content.appendChild(mainCourseText);

  const mainCourseContent = [
    {
      asset: images["mc-miso-glazed-salmon-soba-noodles.png"],
      headline: "Miso-Glazed Salmon with Soba Noodles",
      text: "Oven-roasted salmon glazed with miso-honey sauce, served over chilled soba noodles with pickled veggies.",
    },
    {
      asset: images["mc-harissa-chicken.png"],
      headline: "Harissa-Spiced Chicken with Warm Grain Salad",
      text: "Grilled harissa-marinated chicken served with a quinoa, farro, and roasted vegetable salad, finished with lemon yogurt sauce.",
    },
    {
      asset: images["mc-truffle-mushroom-risotto.png"],
      headline: "Truffle Mushroom Risotto",
      text: "Creamy risotto infused with wild mushrooms, white truffle oil, and topped with crispy shallots and fresh herbs.",
    },
  ];

  mainCourseContent.forEach(({ asset, headline, text }) => {
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

  const dessertText = CreateElement("h2", null, null, "Dessert");
  content.appendChild(dessertText);
 
  const dessertContent = [
    {
      asset: images["d-chocolate-tahini-tart.png"],
      headline: "Dark Chocolate Tahini Tart",
      text: "A rich dark chocolate tart with a hint of nutty tahini, finished with sea salt flakes and edible flowers.",
    },
    {
      asset: images["d-coconut-mango-pavlova.png"],
      headline: "Toasted Coconut & Mango Pavlova",
      text: "A light, crispy meringue topped with coconut cream, fresh mango, and a passion fruit drizzle.",
    },
    {
      asset: images["d-earl-grey-panna-cotta.png"],
      headline: "Earl Grey Panna Cotta",
      text: "A silky panna cotta infused with Earl Grey tea, topped with lavender honey drizzle.",
    },
  ];

  dessertContent.forEach(({ asset, headline, text }) => {
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
};

export { loadMenu };
