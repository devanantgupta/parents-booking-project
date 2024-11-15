// Hiding notification bar in Index Page

const cross = document.querySelector("#cross");
const hid = document.querySelector("#hid");

function removeHide() {

  hid.style.display = "none";
}

cross.onclick = function () {
  removeHide();
};

const links = document.querySelectorAll(".nav-menu");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
}

function toggle() {
  const dash = document.querySelector(".a");
  dash.classList.toggle("open");
  const scn = document.querySelector(".screen");
  scn.classList.toggle("open");
}

function reportWindowSize() {
  const dash = document.querySelector(".a");

  var w = window.innerWidth;
  if (w >= 1000) {
    dash.classList.remove("open");
  }
}

window.onresize = reportWindowSize;

var selectAllRadio = document.querySelector("#selectAll");
var deselectAllRadio = document.querySelector("#deselectAll");
var checkedAll = document.querySelectorAll(".form-check-input");
selectAllRadio.onclick = function () {
  checkedAll.forEach(function (item) {
    if (item.checked == false) {
      item.checked = true;
    }
  });
};

deselectAllRadio.onclick = function () {
  checkedAll.forEach(function (item) {
    if (item.checked == true) {
      item.checked = false;
    }
  });
};
