console.log("Hello from JavaScript!");

// 获取元素
const aboutCard = document.getElementById("about-me-card");
const modal = document.getElementById("about-modal");
const closeBtns = document.querySelectorAll(".close-btn");
const readMoreBtn = document.querySelector(".read-more-btn");

const skillsCard = document.querySelectorAll(".info-card")[1]; // 第二个卡片是特长
const skillsModal = document.getElementById("skills-modal");
const skillsAudio = skillsModal.querySelector("audio");

// 打开关于我的弹窗
readMoreBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // 防止背景滚动
});

// 打开特长弹窗（带音频）
skillsCard.addEventListener("click", () => {
  skillsModal.style.display = "block";
  document.body.style.overflow = "hidden";
  if (skillsAudio) {
    skillsAudio.play(); // 自动播放音频
  }
});

// 所有关闭按钮统一处理
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeModals();
  });
});

// 点击弹窗外部关闭
window.addEventListener("click", (e) => {
  if (e.target === modal || e.target === skillsModal) {
    closeModals();
  }
});

// 关闭弹窗的公共方法
function closeModals() {
  modal.style.display = "none";
  skillsModal.style.display = "none";
  document.body.style.overflow = "auto"; // 恢复背景滚动
  if (skillsAudio) {
    skillsAudio.pause();
    skillsAudio.currentTime = 0; // 重置到开头
  }
}
