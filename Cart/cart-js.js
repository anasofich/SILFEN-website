const url = "https://kea2021-907c.restdb.io/rest/bags?max=10";
// const mediaurl = "https://kea2021-907c.restdb.io/media/";
// 60816c663e28515100031b63
/*API key*/

fetch(url, {
  method: "GET",
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(data) {
  data.forEach((product) => {
    showProduct(product);
  });
}

function showProduct(products) {
  const template = document.querySelector("#productTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = products.name;
  clone.querySelector("img").src = products.photo;
  clone.querySelector("p").textContent = products.description;
  btnElem = clone.querySelector("button");
  btnElem.dataset.id = products._id;

  const parent = document.querySelector(".products");
  //append
  parent.appendChild(clone);
}

const content = [
  {
    _id: "60816c663e28515100031b63",
    name: "ULRIKKE RECYCLED",
    price: 499,
    qty: 5,
    photo:
      "https://anasofich.github.io/SILFEN-website/photos/ulrikka-recycled-green.jpeg",
  },
  {
    _id: "60816c663e28515100031b63",
    name: "BIBBI NYLON",
    price: 599,
    qty: 2,
    photo:
      "https://anasofich.github.io/SILFEN-website/photos/ulrikka-recycled-green.jpeg",
  },
];

content.forEach((element) => {
  console.log(content);
  const tempItem = document.querySelector("#cartTemplate").content;
  const copy = tempItem.cloneNode(true);

  const labelEl = copy.querySelector("label");
  labelEl.textContent = element.name;
  labelEl.setAttribute("for", element.name);

  const inputEl = copy.querySelector("input");
  inputEl.id += element.id;
  inputEl.name = element.name;

  const priceEl = copy.querySelector(".price-all span");
  priceEl.textContent = element.price;

  inputEl.value = element.qty;

  const cartcontent = document.querySelector(".cart-content");
  cartcontent.appendChild(copy);
});
