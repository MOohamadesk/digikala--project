const openBtn = document.getElementById("openCityBox");
const closeBtn = document.getElementById("closeCityBox");
const cityBox = document.getElementById("cityBox");

openBtn.addEventListener("click", () => {
  cityBox.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  cityBox.classList.add("hidden");
});
