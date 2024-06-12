document.addEventListener("DOMContentLoaded", function () {
  
  let buttonContainer = document.querySelector(".button-container");
  let imgList = document.querySelectorAll(".img-wrapper img");
  let buttonList = document.querySelectorAll(".button");
  let carouselContainer = document.querySelector(".carousel-container");
  
  let currentActiveIndex = 0;
  let previousActiveIndex = 0;
  const transitionStyle = "left 100ms linear";
  let intervalId = NaN;
  function switchActive(previousActiveIndex, currentActiveIndex) {
    buttonList[previousActiveIndex].classList.remove("button-active");
    buttonList[currentActiveIndex].classList.add("button-active");

    for (let i = 0; i < imgList.length; i++) {
      let imgItem = imgList[i];
      if (i === currentActiveIndex) {
        imgItem.style.transition = transitionStyle;
        imgItem.style.left = "0";
      } else if(i < currentActiveIndex) {
        if (i !== previousActiveIndex) {
          imgItem.style.transition = "none";
        }
        imgItem.style.left = "-605px";
      } else {
        if (i !== previousActiveIndex) {
          imgItem.style.transition = "none";
        }
        imgItem.style.left = "605px"
      }
    }
  }

  // 隔2秒切换激活状态
  function startSwitchInterval() {
    return setInterval(function () {
      previousActiveIndex = currentActiveIndex;
      currentActiveIndex = (currentActiveIndex + 1) % imgList.length;;
      switchActive(previousActiveIndex, currentActiveIndex);
    }, 3500)
  }

  intervalId = startSwitchInterval();

  // 鼠标移入响应
  buttonContainer.addEventListener("mouseover", function (event) {
    // 判断按钮区域
    if (event.target.classList.contains("button")) {
      const index = parseInt(event.target.getAttribute("key"));
      if (index !== currentActiveIndex) {
        previousActiveIndex = currentActiveIndex;
        currentActiveIndex = index;
        switchActive(previousActiveIndex, currentActiveIndex);
      }
    }
  });

  carouselContainer.addEventListener("mouseenter", function (event) {
    clearInterval(intervalId);
  });

  carouselContainer.addEventListener("mouseleave", function (event) {
    intervalId = startSwitchInterval();
  });
})