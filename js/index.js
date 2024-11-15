const red = document.getElementById("red-banner");
const redBan = document.getElementById("red-bannner");


const bannerhid = document.querySelectorAll(".bi-x-circle");

bannerhid[0].addEventListener("click", function () {
  red.classList.add("display-none");
});

bannerhid[1].addEventListener("click", function () {
  redBan.classList.add("display-none");
});
