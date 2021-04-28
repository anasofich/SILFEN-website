// TO DO
// event listeners on types of bags, when selected adding class to "a" - ".selected_type", and removing it from previously selected type of bag

console.log(document.querySelector("div#filter-type_of_bag a"));
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
