const burger = document.getElementById("burger");
const navigation = document.getElementById("navigation");

burger.addEventListener("click", function () {
  navigation.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});