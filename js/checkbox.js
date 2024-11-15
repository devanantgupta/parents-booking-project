var selectAllRadio = document.querySelector("#selectAll");
var deselectAllRadio = document.querySelector("#deselectAll");
var checkedAll = document.querySelectorAll(".for");
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

var selectAllRadio2 = document.querySelector("#selectAll2");
var deselectAllRadio2 = document.querySelector("#deselectAll2");
var checkedAll2 = document.querySelectorAll(".for2");
selectAllRadio2.onclick = function () {
  checkedAll2.forEach(function (item) {
    if (item.checked == false) {
      item.checked = true;
    }
  });
};

deselectAllRadio2.onclick = function () {
  checkedAll2.forEach(function (item) {
    if (item.checked == true) {
      item.checked = false;
    }
  });
};
