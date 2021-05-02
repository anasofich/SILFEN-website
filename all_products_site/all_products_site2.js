let current_filters = {
    bag_types: "VIEW ALL",
    collections: [],
    sorting_col: "name",
    sorting_ord: "desc",

    // other filters can be added later
};

// event listener functions (run on event)

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
}

// Main code run only once at the beginning

function setup_bag_types_listener(container_type_of_bags) {
    // hack! change HTMLCollection to list (forEach does not work on HTMLCollections...)
    let bag_types = [...container_type_of_bags.children];
    bag_types.forEach((type) => {
        type.addEventListener(
            "click",
            click_bag_type.bind(null, type, bag_types)
        );
    });
}

function main() {
    const container_type_of_bags = document.getElementById(
        "filter-type_of_bag"
    );
    setup_bag_types_listener(container_type_of_bags);
    // setup_filters_listener();
    // setup_sorting_listener();

    // load_data();
}

main();
