document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("secret");
  const findBox = document.getElementById("find");
  const catImage = document.getElementById("misik");
  const cloudBox = document.getElementById("cloud-box");
  const meaningBox = document.getElementById("meaning");
  console.log(btn);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "image.html";
    console.log("clicked");
  });
  findBox.addEventListener("click", (e) => {
    console.log("clicked");
    catImage.classList.remove("hidden");

    setTimeout(() => {
      catImage.style.opacity = 1;
    }, 100);

    cloudBox.classList.remove("hidden");
    setTimeout(() => {
      cloudBox.style.opacity = 2;
    }, 200);

    meaningBox.classList.remove("hidden");
    setTimeout(() => {
      meaningBox.style.opacity = 1;
    }, 300);
  });
});
