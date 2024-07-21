// 获取元素的DOM
let productList = document.querySelectorAll(".product-list list-container .item.middle");
let categoryArea = document.querySelector(".product-list.wear .category");
let earButton = document.querySelector("#ear-device");
let wearButton = document.querySelector("#wear-device");

// 鼠标在类别按钮之间移动时切换显示状态
categoryArea.addEventListener("mouseover", function(event) {
  // 如果鼠标进入按钮区域执行后续代码
  if (event.target.classList.contains("item")) {
    // 如果鼠标进入非活跃按钮执行后续代码
    if (!event.target.classList.contains("active")) {
      // 切换按钮显示状态
      event.target.classList.add("active");
      const id = event.target.id;
      let another = (id === "ear-device" ? wearButton : earButton);
      another.classList.remove("active");
      // 修改商品列表的商品信息

    }
  }
})