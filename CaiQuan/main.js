// 获取元素dom
let playContainer = document.querySelector(".play-container");
let rockBtn = document.querySelector(".play .rock");
let scissorsBtn = document.querySelector(".play .rock");
let paperBtn = document.querySelector(".play .rock");
let initialDiscript = document.querySelector(".discript.initial");
let resultContainer = document.querySelector(".result-container");
let userResultEle = document.querySelector(".result-container .user");
let computerResultEle = document.querySelector(".result-container .computer");
let resultPromotEle = document.querySelector(".result-container .promot");
let gameInfoEle = document.querySelector(".discript.game-info");
let headEle = document.querySelector(".head");

const gestureImgs = ["./img/rock.svg", "./img/scissors.svg", "./img/paper.svg"];

let userGestureKey = 0,      
    computerGestureKey = 0,    // 0石头，1剪刀，2布
    resultSign = 0,            // 0负 1平 2胜
    playTimes = 0,
    winTimes = 0,
    loseTimes = 0

// 猜拳区域点击事件
playContainer.addEventListener("click", function (event) {
  // 判断处于按钮区域
  if (event.target.classList.contains("item")) {
    // 隐藏猜拳区域，显示结果区域
    playContainer.classList.add("hide");
    setTimeout(() => {
      playContainer.style.display = "none";
      resultContainer.style.display = "flex";
      setTimeout(() => {
        resultContainer.classList.remove("hide");
      }, 0);
    }, 1000)
    initialDiscript.style.display = "none";

    // 显示猜拳结果
    // 1. 用户结果
    userGestureKey = parseInt(event.target.dataset.key);
    userResultEle.style.backgroundImage = `url(${gestureImgs[userGestureKey]})`;
    // 2. 电脑结果
    computerGestureKey = Math.floor((3 * Math.random()));
    computerResultEle.style.backgroundImage = `url(${gestureImgs[computerGestureKey]})`;
    // 3. 胜负判断
    if(userGestureKey === computerGestureKey) {
      resultSign = 1
    } else if(userGestureKey - computerGestureKey === -1 || userGestureKey - computerGestureKey === 2) {
      resultSign = 2;
    } else {
      resultSign = 0; 
    }
    if (resultSign === 0) {
      loseTimes++;
      resultPromotEle.innerHTML = "失败";
    } else if(resultSign === 1) {
      resultPromotEle.innerHTML = "平手";
    } else {
      winTimes++;
      resultPromotEle.innerHTML = "胜利";
    }
    // 4. 显示次数统计
    playTimes++;
    gameInfoEle.innerHTML = `猜拳${playTimes}次 获胜${winTimes}次`;
  }
})

// 点击标题回到猜拳界面
headEle.addEventListener("click", function(event) {
  resultContainer.classList.add("hide");
  resultContainer.style.display = "none";
  playContainer.style.display = "flex";
  setTimeout(() => {
    playContainer.classList.remove("hide");
  }, 0);
})