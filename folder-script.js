/*SWITCH button functions*/

function check() {
  document.getElementById("checkbox").checked = true;
}

function uncheck() {
  document.getElementById("checkbox").checked = false;
}

// 1 OPTION - Switch settings for Silfen brand

function checkSwitchAndGoToSilfenPlay() {
  check();
  console.log("HERE");
  window.location.href = "../silfenplay.html";
}

function EventListenerSwitchFromSilfen() {
  switchButton = document.querySelector("label.switch");
  switchButton.addEventListener("click", checkSwitchAndGoToSilfenPlay);
}

uncheck();
EventListenerSwitchFromSilfen();
