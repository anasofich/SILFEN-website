const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea2021-907c.restdb.io/rest/bags";

const CART = {
  KEY: "silfen",
  contents: [],
  init() {
    let _contents = localStorage.getItem(CART.KEY);
    console.log(_contents);
    //console.log(_contents.length);
    if (_contents) {
      //turn it into JS objects
      CART.contents = JSON.parse(_contents);
    } else {
      //dummy JS test data
      //here we'd handle an empty cart??
      CART.contents = [
        { id: 1, title: "Apple", qty: 2, price: 0.85 },
        { id: 2, title: "Banana", qty: 1, price: 0.35 },
        { id: 3, title: "Cherry", qty: 1, price: 0.05 },
      ];
    }
  },
};
