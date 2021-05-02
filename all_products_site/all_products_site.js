const searchParams = new URLSearchParams(window.location.search);
const articleID = searchParams.get("name");

// TO DO
// event listeners on types of bags, when selected adding class to "a" - ".selected_type", and removing it from previously selected type of bag

let container_types_of_bags = document.getElementById("filter-type_of_bag");
console.log(container_types_of_bags);
// console.log(container_types_of_bags.childNodes);
console.log(container_types_of_bags.children);

let bag_types = [];

container_types_of_bags.forEach((type) => {
    let types = document.querySelector("#filter-type_of_bag").children;
    console.log(types);
});


type.addEventListener("click", selected_type);


function selected_type(type) {
    type.
}



// function setup_event_listeners_on_bag_types(bag_types) {
//     bag_types.forEach((type) => {
//         let types = document.querySelector("#filter-type_of_bag").children;
//         console.log(types);
//     });
// }

// setup_event_listeners_on_bag_types(container_types_of_bags);

// document.querySelector("#button-exit").addEventListener("click", titleScreen);
//
//
//
//
//Filipa kod

let product_types = [];

function clear_selected_types(product_types) {
    // removes css properties from all types
}

function event_on_click_type(type) {
    // call function clear_selected_types
    // add css class
}

function setup_event_listeners(product_types) {
    // for all types add event listener on click
}


// import (biblioteki albo inne pliki.js)

// statatyczne zmienne (globalne)

// definicje funkcji albo klasy

// inne funkcje ktore cos rzeczywiscie robia
// glowna funkcja ktora wywoluje inne funkcje

// wykonanie


setup_event_listeners(product_types);

product_types.forEach((type) => {
    let types = document.querySelector("div#filter-type_of_bag a");
    console.log(types);
});

function selectType() {}

// TO DO
// event listeners on FILTER and SORT buttons --> when any of them is selected then it has a class "selected-filter_or_sort"
// when clicked div#filter_by or div#sort_by is showed
// when it is div#filter_by it shows at the begining only div.filtering_category , elements of categories are hidden
// when click on category then elements of category is being showned and icon-plus is changing to icon-minus
// when click on element then img icon-unselected is changing to icon-selected
// what you click is being saved in local storage

// when mobile make FILTER and SORT elements hidden when loading the page
//
//
//
//TO DO- 1. fetch it properly to restdb, 2. change properties inside template
//Show each product
//

// function getdata() {
//     fetch("https://kea21s-3790.restdb.io/rest/posts", {
//         method: "GET",
//         headers: {
//             "x-apikey": "606d5f8cf553500431007514",
//         },
//     })
//         .then((res) => res.json())
//         .then((response) => {
//             console.log(response);
//             showPosts(response);
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// }
// getdata();

// function showPosts(posts) {
//     const template = document.querySelector("template.product-template")
//         .content;

//     posts.forEach((post) => {
//         console.log(post);
//         const copy = template.cloneNode(true);
//         template.querySelector("h3").textContent = post.title;
//         template.querySelector("h4 span").textContent = post.username;
//         template.querySelector(
//             "a.readmore"
//         ).href = `article.html?articleId=${post._id}`;
//         document.querySelector("div#product_list").appendChild(copy);
//     });
// }
//
//
