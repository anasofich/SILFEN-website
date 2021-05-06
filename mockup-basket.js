const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea2021-907c.restdb.io/rest/bags/" + id;
// const mediaurl = "https://kea2021-907c.restdb.io/media/";

/*API key*/
const options = {
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
};

fetch(url, {
  method: "GET",
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
  },
})
  .then((res) => res.json())
  .then((response) => {
    handleBags(response);
  })
  .catch((err) => {
    console.error(err);
  });

function handleBags(bags) {
  //console.log(bags);
  document.querySelector("h1.nameBag").textContent = bags.name;
  document.querySelector("h1.priceBag").textContent = `${bags.price} DKK`;
  document.querySelector(".list li").textContent = bags.material;
  document.querySelector(".product-pic img").src = bags.photo;
  document.querySelector(".product-pic img:nth-child(2)").src = bags.photoOne;
  document.querySelector(".product-pic img:nth-child(3)").src = bags.photoTwo;
  document.querySelector(".product-pic img:nth-child(4)").src = bags.photoThree;
  document.querySelector(".list li:nth-child(2)").textContent = bags.dimensions;
  document.querySelector(".bagDesc").textContent = bags.description;

  document.querySelector(".addCart2").addEventListener("click", () => {
    //alert("hey!");
    //console.log(bags);
    CART.add(bags);
  });
}

const CART = {
  KEY: "basket",
  contents: [],
  init() {
    //contents is a temporary string

    let _contents = localStorage.getItem(CART.KEY);
    if (_contents) {
      // if there's anything there, turn it into 20 objects that we can access with the dot . notation
      CART.contents = JSON.parse(_contents);
    } else {
      /*CART.contents = [
        {
          _id: "608187eb3e28515100031d8f",
          qty: 5,
          collection: "",
          colour: "Blue",
          description:
            "Ulrikke Woven Satin is a new shoulder bag with a shiny twist",
          dimensions: "Dimensions: 30 x 6 x 20 cm.",
          material: "Material: 100 % Polyester",
          name: "ULRIKKE WOVEN SATIN",
          newProducts: true,
          outOfStock: false,
          photo:
            "https://anasofich.github.io/SILFEN-website/photos/ulrike-woven-satin-blue.jpg",
          photoOne:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-blue-top.jpg",
          photoThree: "",
          photoTwo:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-statin-blue-side.jpg",
          price: 499,
          sale: false,
          salePrice: "",
          typeOfTheBag: "BumbagsandCrossbodybags",
        },
        {
          _id: "608188303e28515100031d9a",
          qty: 3,
          collection: "",
          colour: "Beige",
          description:
            "Ulrikke Woven Satin is a new crossbody bag with a shiny twist",
          dimensions: "Dimensions: 30 x 6 x 20 cm.",
          material: "Material: 100 % Polyester",
          name: "ULRIKKE WOVEN SATIN",
          newProducts: true,
          outOfStock: false,
          photo:
            "https://anasofich.github.io/SILFEN-website/photos/ulrike-woven-satin-beige.jpg",
          photoOne:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-beige-side.jpg",
          photoThree:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-model.jpg",
          photoTwo:
            "https://anasofich.github.io/SILFEN-website/photos/urlike-woven-satin-beige-top.jpg",
          price: 499,
          sale: false,
          salePrice: "",
          typeOfTheBag: "BumbagsandCrossbodybags",
        },
      ];*/
    }
    // I want to update the
    //this.updateDOM(); use this when we're not hardcoding the contents, and the content is read from localStorage
    CART.sync();
  },
  sync() {
    //turn CART contents array of objects into a string that we can write in localStorage
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);
    CART.updateDOM();
  },
  updateDOM() {
    const cartcontentEl = document.querySelector(".cartContent");
    cartcontentEl.innerHTML = "";
    CART.contents.forEach((element) => {
      const tempItem = document.querySelector("#cartTemplate").content;
      //console.log(element);
      const itemCopy = tempItem.cloneNode(true);

      const bagID = element._id;
      itemCopy.querySelector(".bagName").textContent = element.name;
      itemCopy.querySelector("label").setAttribute("for", "fid-" + bagID);

      itemCopy.querySelector("input").id += bagID;
      itemCopy.querySelector("input").name += bagID;
      itemCopy.querySelector("input").value = element.qty;
      itemCopy.querySelector("input").addEventListener("change", () => {
        const itemQty = itemCopy.querySelector("input").valueAsNumber;
        console.log("element");
        console.log(element.qty);
        update(element);
      });

      itemCopy.querySelector("img").src = element.photo;
      itemCopy.querySelector(".bagColor").textContent = element.colour;
      itemCopy.querySelector(".bagproductPrice").textContent = element.price;

      cartcontentEl.appendChild(itemCopy);
    });
  },
  add(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (index == -1) {
      console.log(obj);
      obj.qty = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
    } else {
      CART.contents[index].qty += 1;
    }

    console.log(CART.contents);
    this.sync();
  },
  update(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    const inputEl = document.querySelector("fid-" + obj._id);
    CART.contents[index].qty = inputEl.valueAsNumber;
    CART.sync();
  },
};

CART.init();
