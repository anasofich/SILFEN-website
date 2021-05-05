
document.addEventListener("click", (x) => 0);

/*MENU*/
function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");
  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}
  /*SHOPMENU*/
function shopMenuToggle() {
  var nav = document.getElementById("shop-menu-overlay");
  nav.classList.toggle("active");
  var nav = document.getElementById("shopToggleIcon");
  nav.classList.toggle("active");

}

  /*ABOUTMENU*/
  function aboutMenuToggle() {
    var nav = document.getElementById("about-menu-overlay");
    nav.classList.toggle("active");
    var nav = document.getElementById("aboutToggleIcon");
    nav.classList.toggle("active");
  
  }