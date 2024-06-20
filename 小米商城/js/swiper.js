let nextButton = document.querySelector(".swiper .right-arrow a");
let perviousButton = document.querySelector(".swiper .left-arrow a");
let swiperList = document.querySelectorAll(".swiper .swiper-list li");
let paginationList =  document.querySelectorAll(".swiper .pagination li");
let swiper = document.querySelector(".swiper");
let pagination = document.querySelector(".swiper .pagination");

let currentIndex = 0;

let intervalID = setInterval(() => {
  updateActive(currentIndex, (currentIndex + 1) % 6);
}, 5000)

function updateActive(lastIndex, newIndex) {
  currentIndex = newIndex;
  swiperList[lastIndex].classList.remove("active");
  paginationList[lastIndex].classList.remove("active");
  swiperList[newIndex].classList.add("active");
  paginationList[newIndex].classList.add("active");
}

nextButton.addEventListener("click", function () {
  this.classList.add("disable");
  updateActive(currentIndex, (currentIndex + 1) % 6);
  setTimeout(() => {
    this.classList.remove("disable");
  }, 500)
})

perviousButton.addEventListener("click", function () {
  this.classList.add("disable");
  setTimeout(() => {
    this.classList.remove("disable");
  }, 500)
  updateActive(currentIndex, currentIndex === 0 ? 5 : currentIndex - 1);
})

swiper.addEventListener("mouseenter", function () {
  clearInterval(intervalID);
})

swiper.addEventListener("mouseleave", function () {
  intervalID = setInterval(() => {
    updateActive(currentIndex, (currentIndex + 1) % 6);
  }, 5000)
})

pagination.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const newIndex = parseInt(event.target.dataset.index);
    updateActive(currentIndex, newIndex);
  }
})