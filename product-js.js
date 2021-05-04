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

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleBags(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleBags(bags) {
  console.log(bags);
  document.querySelector("h1.nameBag").textContent = bags.name;
  document.querySelector("h1.priceBag").textContent = `${bags.price} DKK`;
  document.querySelector(".list li").textContent = bags.material;
  document.querySelector(".product-pic img").src = bags.photo;
  document.querySelector(".product-pic img:nth-child(2)").src = bags.photoOne;
  document.querySelector(".product-pic img:nth-child(3)").src = bags.photoTwo;
  document.querySelector(".product-pic img:nth-child(4)").src = bags.photoThree;
  document.querySelector(".list li:nth-child(2)").textContent = bags.dimensions;
  document.querySelector(".bagDesc").textContent = bags.description;
  document.querySelector(".bagDesc li").textContent = bags.description;
}
