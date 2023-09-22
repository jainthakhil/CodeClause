const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const backImg = document.getElementById("heroimg");
let i = 3;

leftBtn.addEventListener("click", function () {
  if (rightBtn.style.display === "none") {
    rightBtn.style.display = "block";
  }
  i--;
  backImg.src = "images/hero" + i + ".jpg";
  if (i <= 1) {
    leftBtn.style.display = "none";
  }
});

rightBtn.addEventListener("click", function () {
  if (leftBtn.style.display === "none") {
    leftBtn.style.display = "block";
  }
  i++;
  backImg.src = "images/hero" + i + ".jpg";
  if (i >= 5) {
    rightBtn.style.display = "none";
  }
});

const anchor = document.querySelectorAll(a);
anchor.href = "#";
