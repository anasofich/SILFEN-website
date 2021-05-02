document
  .querySelector(".cSnowQueen")
  .addEventListener("mouseover", cSnowQueenHover);

function cSnowQueenHover() {
  console.log("function cSnowQueenHover()");
  document.querySelector(".cHeader").classList.remove("yellowshadow");
  document.querySelector(".cHeader").classList.remove("greenshadow");
  document.querySelector(".cHeader").classList.add("blueshadow");

  document.querySelector(".cRecycle").classList.remove("yellowhover");
  document.querySelector(".cRecycle").classList.remove("greenhover");
  document.querySelector(".cClassics").classList.remove("yellowhover");
  document.querySelector(".cClassics").classList.remove("greenhover");
  document.querySelector(".cSnowQueen").classList.remove("yellowhover");
  document.querySelector(".cSnowQueen").classList.remove("greenhover");

  document.querySelector(".cRecycle").classList.add("bluehover");
  document.querySelector(".cClassics").classList.add("bluehover");
  document.querySelector(".cSnowQueen").classList.add("bluehover");

  document.querySelector(".pRecycle").classList.add("hidden");
  document.querySelector(".pClassics").classList.add("hidden");
  document.querySelector(".pSnowQueen").classList.remove("hidden");
}

document
  .querySelector(".cRecycle")
  .addEventListener("mouseover", cRecycleHover);

function cRecycleHover() {
  console.log("function cRecycleHover()");
  document.querySelector(".cHeader").classList.remove("greenshadow");
  document.querySelector(".cHeader").classList.remove("blueshadow");
  document.querySelector(".cHeader").classList.add("yellowshadow");

  document.querySelector(".cSnowQueen").classList.remove("bluehover");
  document.querySelector(".cSnowQueen").classList.remove("greenhover");
  document.querySelector(".cClassics").classList.remove("bluehover");
  document.querySelector(".cClassics").classList.remove("greenhover");
  document.querySelector(".cRecycle").classList.remove("bluehover");
  document.querySelector(".cRecycle").classList.remove("greenhover");

  document.querySelector(".cSnowQueen").classList.add("yellowhover");
  document.querySelector(".cClassics").classList.add("yellowhover");
  document.querySelector(".cRecycle").classList.add("yellowhover");

  document.querySelector(".pSnowQueen").classList.add("hidden");
  document.querySelector(".pClassics").classList.add("hidden");
  document.querySelector(".pRecycle").classList.remove("hidden");
}

document
  .querySelector(".cClassics")
  .addEventListener("mouseover", cClassicsHover);

function cClassicsHover() {
  console.log("function cClassicsHover()");
  document.querySelector(".cHeader").classList.remove("yellowshadow");
  document.querySelector(".cHeader").classList.remove("blueshadow");
  document.querySelector(".cHeader").classList.add("greenshadow");

  document.querySelector(".cSnowQueen").classList.remove("bluehover");
  document.querySelector(".cSnowQueen").classList.remove("yellowhover");
  document.querySelector(".cClassics").classList.remove("bluehover");
  document.querySelector(".cClassics").classList.remove("yellowhover");
  document.querySelector(".cRecycle").classList.remove("bluehover");
  document.querySelector(".cRecycle").classList.remove("yellowhover");

  document.querySelector(".cSnowQueen").classList.add("greenhover");
  document.querySelector(".cClassics").classList.add("greenhover");
  document.querySelector(".cRecycle").classList.add("greenhover");

  document.querySelector(".pSnowQueen").classList.add("hidden");
  document.querySelector(".pRecycle").classList.add("hidden");
  document.querySelector(".pClassics").classList.remove("hidden");
}
