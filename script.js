document.querySelector("#menu").classList.add("hidden");

document
  .querySelector("#menuToggle")
  .addEventListener("mousedown", removeHidden);

function addHidden() {
  document.querySelector("#menu").classList.add("hidden");
}

function removeHidden() {
  document
    .querySelector("#menuToggle")
    .addEventListener("mousedown", addHidden);
  document.querySelector("#menu").classList.remove("hidden");
}
document.addEventListener("click", (x) => 0);
