//finding a value of "category" from URL

// const urlParams = new URLSearchParams(window.location.search);
// const category = ;
// document.querySelector("").textContent = category;

// 1
// url = 'https://kea2021-907c.restdb.io/shop?brand=tesla'
// url = 'https://kea2021-907c.restdb.io/shop?color=red'
// const urlParams = new URLSearchParams(window.location.search);

// let params = urlParams.getQueryParameters()
// params.brand

// 2
// localStorage.setItem('shop_brand', 'tesla')

// localStorage.getItem('shop_brand')
// localStorage.removeItem('shop_brand')

// const url = "https://kea-alt-del.dk/t7/api/products?limit=100";

//adding the source from where we fetch data

// const url = "https://kea-alt-del.dk/t7/api/products?category=" + category;
const url = "https://kea2021-907c.restdb.io/rest/bags?";
const header = {
  method: "GET",
  headers: {
    "x-apikey": "602e264f5ad3610fb5bb6267",
    "Content-Type": "application/json",
  },
};
console.log(url);

fetch(url, header)
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    response.forEach((product) => {
      showProduct(product);
    });
  })
  .catch((err) => {
    console.error(err);
  });

function showProduct(data) {
  //grab the template
  const product_template = document.querySelector("template.product-template")
    .content;
  console.log(product_template);

  //clone it
  const myCopy = product_template.cloneNode(true);

  //change content
  myCopy.querySelector("h3.product-name").textContent = data.name;
  myCopy.querySelector("img.product-image").alt = data.name;

  myCopy.querySelector("img.product-image").src = data.photo;
  myCopy.querySelector(
    ".productlistLink"
  ).href = `../product-view.html?_id=${data._id}`;

  //  myCopy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //CIRCLE COLOUR???

  //changing content when sale, sold out etc

  if (url.sale == true) {
    myCopy.querySelector("h4.product-sale_price").textContent =
      data.salePrice + " DKK";
    myCopy.querySelector("h4.product-price").textContent = data.price + " DKK";
  } else {
    myCopy.querySelector("h4.product-sale_price").textContent =
      data.price + " DKK";
  }

  //changin links to get to single product
  const pLinks = myCopy.querySelectorAll(".productlistLink");
  pLinks.forEach(addNewLink);

  function addNewLink(item) {
    item.href = `../product-view.html?id=${data._id}`;
  }

  // const aEl = myCopy.querySelector("a");
  // aEl.href = "product.html?id=" + url_id;
  // <article class="single-product"></article>

  //grab parent
  const parent = document.querySelector("#product_list");
  console.log(parent);
  //append
  parent.appendChild(myCopy);
}

// global data

let current_filters = {
  bag_types: "VIEW ALL",
  sales: false,
  newarr: false,
  collections: [],
  materials: [],
};

// load data function

function load_data() {
  console.log("loading_data...");
}

// helper function (other usage)

function toggle_click(button) {
  // changes only the visual style nothing else
  let source = button.children[0].src;
  if (source.includes("unselected") == true) {
    button.children[0].src = "../images/icon-selected_filtering_element.svg";
  } else {
    button.children[0].src = "../images/icon-unselected_filtering_element.svg";
  }
}

function toggle_click_hearts(product) {
  // changes only the visual style of hearts on click nothing else

  let heart_icon = product.children[0].children[1];
  if (heart_icon.classList.contains("wishlist-on-product") == true) {
    heart_icon.classList.remove("wishlist-on-product");
    heart_icon.classList.add("wishlist-on-product-clicked");
  } else {
    heart_icon.classList.remove("wishlist-on-product-clicked");
    heart_icon.classList.add("wishlist-on-product");
  }
}

// event listener functions

function click_bag_type(clicked_type, all_bag_types) {
  // add class selection on div
  all_bag_types.forEach((type) => {
    type.classList.remove("selected_type");
  });
  clicked_type.classList.add("selected_type");
  // add selected bag type name to filtering
  current_filters.bag_types = clicked_type.getElementsByClassName(
    "text-bag_type"
  )[0].textContent;

  load_data();
}

function setup_wishlist_listener(container_product_list) {
  // let products = container_product_list.children
  let products = [...container_product_list.children];
  products.forEach((product) => {
    product.addEventListener("click", toggle_click_hearts.bind(null, product));
  });
}

function click_sales_filter(sales_button) {
  toggle_click(sales_button);
  if (current_filters.sales) {
    current_filters.sales = false;
  } else {
    current_filters.sales = true;
  }

  load_data();
}

function click_newarr_filter(newarr_button) {
  toggle_click(newarr_button);
  if (current_filters.newarr) {
    current_filters.newarr = false;
  } else {
    current_filters.newarr = true;
  }

  load_data();
}

function click_collection_filter(collection_button) {
  toggle_click(collection_button.children[0]);

  // save selected collection filter
  let collection_name = collection_button.children[0].children[1].textContent;
  if (current_filters.collections.includes(collection_name)) {
    // removes #collection_name from the list if it already exist
    current_filters.collections = current_filters.collections.filter(
      (i) => i !== collection_name
    );
  } else {
    // adds #collection_name to the list if it does not already exist
    current_filters.collections.push(collection_name);
  }

  load_data();
}

function click_material_filter(material_button) {
  toggle_click(material_button.children[0]); //to get from a, li element
  let material_name = material_button.children[0].children[1].textContent; //to get to p element which is [1]st child of a
  if (current_filters.materials.includes(material_name)) {
    //"current_filters" is a global data
    // removes #material_name from the list if it already exist
    current_filters.materials = current_filters.materials.filter(
      (i) => i !== material_name
    );
  } else {
    // adds #material_name to the list if it does not already exist
    current_filters.materials.push(material_name);
  }

  load_data();
}

// setup functions (run only once)

function setup_bag_types_listener(container_type_of_bags) {
  // hack! change HTMLCollection to list (forEach does not work on HTMLCollections...)
  let bag_types = [...container_type_of_bags.children];
  bag_types.forEach((type) => {
    type.addEventListener("click", click_bag_type.bind(null, type, bag_types));
  });
}

function setup_filters_listener(container_filters) {
  // one option
  let sales_container = container_filters.getElementsByClassName(
    "filter-sale"
  )[0]; // [0] needed here to only select the first object with that class
  let newarr_container = container_filters.getElementsByClassName(
    "filter-new_arrivals"
  )[0];
  // multiple options
  let collections_container = container_filters.getElementsByClassName(
    "filter-collection_elements"
  )[0];
  let material_container = container_filters.getElementsByClassName(
    "filter-material_elements"
  )[0];

  // add event listeners for one option
  let sales_button = sales_container.children[0];
  sales_button.addEventListener(
    "click",
    click_sales_filter.bind(null, sales_button)
  );

  let newarr_button = newarr_container.children[0];
  newarr_button.addEventListener(
    "click",
    click_newarr_filter.bind(null, newarr_button)
  );

  // add event listeners for multiple options
  let collection_types = [...collections_container.children]; //to create a list with children elements
  collection_types.forEach((type) => {
    type.addEventListener("click", click_collection_filter.bind(null, type));
  });
  let material_types = [...material_container.children];

  // console.log(material_types)
  material_types.forEach((type) => {
    type.addEventListener("click", click_material_filter.bind(null, type));
  });
}

function setup_filter_sort_panel(
  container_filters,
  container_sorting,
  filter_button,
  sort_button
) {
  function click_select_filtering(
    container_filters,
    container_sorting,
    filter_button,
    sort_button
  ) {
    filter_button.classList.add("selected-filter_or_sort");
    container_filters.classList.remove("hidden");

    container_sorting.classList.add("hidden");
    sort_button.classList.remove("selected-filter_or_sort");
  }

  function click_select_sorting(
    container_filters,
    container_sorting,
    filter_button,
    sort_button
  ) {
    container_filters.classList.add("hidden");
    filter_button.classList.remove("selected-filter_or_sort");

    container_sorting.classList.remove("hidden");
    sort_button.classList.add("selected-filter_or_sort");
  }

  filter_button.addEventListener(
    "click",
    click_select_filtering.bind(
      null,
      container_filters,
      container_sorting,
      filter_button,
      sort_button
    )
  ); //bind, null tutaj zeby przekazalo do funkcji te zmienne oraz zeby funkcja w event listenerze nie wykonala sie od razu, tylko na click
  sort_button.addEventListener(
    "click",
    click_select_sorting.bind(
      null,
      container_filters,
      container_sorting,
      filter_button,
      sort_button
    )
  );
}

function main() {
  const container_type_of_bags = document.getElementById("filter-type_of_bag");
  const container_filters = document.getElementById("filter_by");
  const container_sorting = document.getElementById("sort_by");
  const container_product_list = document.getElementById("product_list");
  const filter_button = document.getElementById("select_filtering");
  const sort_button = document.getElementById("select_sorting");

  setup_filter_sort_panel(
    container_filters,
    container_sorting,
    filter_button,
    sort_button
  );
  setup_bag_types_listener(container_type_of_bags);
  setup_filters_listener(container_filters);
  setup_wishlist_listener(container_product_list);

  load_data();
}

main();
