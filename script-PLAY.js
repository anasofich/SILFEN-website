document.addEventListener("click", (x) => 0);

document.getElementById("checkbox").checked = true;

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

/*SWITCH button functions*/

function check() {
  document.getElementById("checkbox").checked = true;
}

function uncheck() {
  document.getElementById("checkbox").checked = false;
}

// 1 OPTION - Switch settings for Silfen brand

// function checkSwitchAndGoToSilfenPlay() {
//   check();
//   console.log("HERE")
//   window.location.href = "./silfenplay.html";
// }

// function EventListenerSwitchFromSilfen() {
//   switchButton = document.querySelector("label.switch");
//   switchButton.addEventListener("click", checkSwitchAndGoToSilfenPlay);
// }

// uncheck();
// EventListenerSwitchFromSilfen();




// 2 OPTION - Switch settings for Silfen PLAY brand

  function checkSwitchAndGoToSilfen() {
    uncheck()
    window.location.href = './index.html';
  }

  function EventListenerSwitchFromPLAY() {
    switchButton = document.querySelector("label.switch")
    switchButton.addEventListener("click", checkSwitchAndGoToSilfen);
  }

check()
EventListenerSwitchFromPLAY()
