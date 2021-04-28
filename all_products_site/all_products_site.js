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

// function addEventListeners() {
//     document.querySelector("#filter-type_of_bag a").addEventListener("click", selectType);

//     if(openingOfTheGame != true) {
//        clickOnButtonSound.play();
//        }

//     document.querySelector("#instructions").classList.add("hidden");
//     document.querySelector("#title_screen").classList.remove("hidden");
//     if (event_listeners.includes("title_play_button_listener") == false) {
//         document.querySelector("#start_game_button").addEventListener("click", startGame);
//         event_listeners.push("title_play_button_listener");
//     }
//     if (event_listeners.includes("instructions_button_listener") == false) {
//         document.querySelector("#instructions_button").addEventListener("click", instructions);
//         event_listeners.push("instructions_button_listener");
//     }
// }

function selectType() {}
