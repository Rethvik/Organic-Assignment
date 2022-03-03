const mainDiv = document.querySelector(".full-screen");
const movieBoxes = document.querySelectorAll(".movie-box");
const overlay = document.querySelector("#overlay");
const backArrow = document.querySelector(".back");
const mb1 = document.querySelector(".mb1");
const clientIcon1 = document.querySelector(".icon-1");
const clientIcon2 = document.querySelector(".icon-2");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const giphStore = [
  "mb1",
  "mb2",
  "mb3",
  "mb4",
  "mb5",
  "mb6",
  "mb7",
  "mb8",
  "mb9",
];
const photoStore = [
  "mb1",
  "mb2",
  "mb3",
  "mb4",
  "mb5",
  "mb6",
  "mb7",
  "mb8",
  "mb9",
];
function overlayOn() {
  mainDiv.style.display = "none";
  overlay.style.display = "block";
}
const eventListener = (item) => {
  item.addEventListener("click", overlayOn);
};

for (let i = 0; i < giphStore.length; i++) {
  movieBoxes[
    i
  ].style.backgroundImage = `url(images/movieImages/${photoStore[i]}.jpg)`;
  movieBoxes[i].addEventListener("mouseenter", function () {
    movieBoxes[
      i
    ].style.backgroundImage = `url(images/gifs/${giphStore[i]}.gif)`;
  });
  movieBoxes[i].addEventListener("mouseleave", function () {
    movieBoxes[
      i
    ].style.backgroundImage = `url(images/movieImages/${photoStore[i]}.jpg)`;
  });
}

movieBoxes.forEach(eventListener);

const overlayOff = () => {
  mainDiv.style.display = "block";
  overlay.style.display = "none";
};
backArrow.addEventListener("click", overlayOff);

rightArrow.addEventListener("click", function () {
  clientIcon1.style.display = "none";
  clientIcon2.style.display = "flex";
  leftArrow.style.display = "block";
  rightArrow.style.display = "none";
});
leftArrow.addEventListener("click", function () {
  clientIcon2.style.display = "none";
  clientIcon1.style.display = "flex";
  rightArrow.style.display = "block";
  leftArrow.style.display = "none";
});
