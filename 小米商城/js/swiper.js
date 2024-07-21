// 获取元素的DOM
let nextButton = document.querySelector(".swiper .right-arrow a");
let perviousButton = document.querySelector(".swiper .left-arrow a");
let swiper = document.querySelector(".swiper");
let swiperList = document.querySelectorAll(".swiper .swiper-list li");
let pagination = document.querySelector(".swiper .pagination");
let paginationList =  document.querySelectorAll(".swiper .pagination li");

let currentIndex = 0;     // 当前索引

// 切换图片函数
function switchImage(lastIndex, newIndex) {
  currentIndex = newIndex;
  swiperList[lastIndex].classList.remove("active");
  paginationList[lastIndex].classList.remove("active");
  swiperList[newIndex].classList.add("active");
  paginationList[newIndex].classList.add("active");
}

// 隔5秒切换一次
let intervalID = setInterval(() => {
  switchImage(currentIndex, (currentIndex + 1) % 6);
}, 5000)

// 点击下一页切换图片
nextButton.addEventListener("click", function () {
  this.classList.add("disable");
  switchImage(currentIndex, (currentIndex + 1) % 6);
  setTimeout(() => {
    this.classList.remove("disable");
  }, 500)
})

// 点击上一页切换图片
perviousButton.addEventListener("click", function () {
  this.classList.add("disable");
  setTimeout(() => {
    this.classList.remove("disable");
  }, 500)
  switchImage(currentIndex, currentIndex === 0 ? 5 : currentIndex - 1);
})

// 鼠标进入轮播区域停止轮播
swiper.addEventListener("mouseenter", function () {
  clearInterval(intervalID);
})

// 鼠标离开轮播区域开始轮播
swiper.addEventListener("mouseleave", function () {
  intervalID = setInterval(() => {
    switchImage(currentIndex, (currentIndex + 1) % 6);
  }, 5000)
})

// 点击分页圆点切换图片
pagination.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const newIndex = parseInt(event.target.dataset.index);
    switchImage(currentIndex, newIndex);
  }
})