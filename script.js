console.log("Hello from JavaScript!");

// 获取元素
const aboutCard = document.getElementById("about-me-card");
const modal = document.getElementById("about-modal");
const closeBtn = document.querySelector(".close-btn");
const readMoreBtn = document.querySelector(".read-more-btn");

// 打开弹窗
readMoreBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // 防止背景滚动
});

// 关闭弹窗
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 恢复背景滚动
});

// 点击弹窗外部关闭
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
