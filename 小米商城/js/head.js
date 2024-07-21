let bottomNav = document.querySelector(".bottombar-nav");
let bottomNavMenu = document.querySelector(".bottombar>.nav-menu");
let shopcar = document.querySelector(".topbar .shopcar a");

shopcar.addEventListener("mouseenter", function (event) {
  console.log("mouseenter");
  event.target.classList.add("active");
})

shopcar.addEventListener("mouseleave", function (event) {
  setTimeout(() => {
    event.target.classList.remove("active")
  }, 350)
})

bottomNav.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("product")) {
    bottomNavMenu.classList.add("show");
    bottomNavMenu.classList.add("border");
  } else {
    bottomNavMenu.classList.remove("show");
  }
})

bottomNav.addEventListener("mouseleave", function (event) {
  bottomNavMenu.classList.remove("show");
})

bottomNavMenu.addEventListener("transitionend", function (event) {
  const height = window.getComputedStyle(bottomNavMenu).getPropertyValue("height");
  if(height === "0px") {
    bottomNavMenu.classList.remove("border");
  }
})