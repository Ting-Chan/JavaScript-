const searchInputEle = document.querySelector(".header .search-input");
const enterBtn = document.querySelector(".header .icon-fanhui");

// 监听搜索框输入 控制回车按钮显示
searchInputEle.addEventListener("input", function(event) {
  if (event.target.value !== "") {
    enterBtn.classList.add("show");
  }else {
    enterBtn.classList.remove("show");
  }
})