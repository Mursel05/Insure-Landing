const button = document.querySelector(".menyu");
const menyu = document.querySelector(".menyu-link");
button.addEventListener("click", function () {
  menyu.classList.toggle("hidden");
});
