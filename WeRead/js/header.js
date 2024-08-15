const searchInputEle = document.querySelector(".header .search-input");
const enterBtn = document.querySelector(".header .icon-fanhui")

searchInputEle.addEventListener("input", function(event) {
  console.log("in");
  
  if (event.target.value !== "") {
    enterBtn.classList.add("show");
  }else {
    enterBtn.classList.remove("show");
  }
})