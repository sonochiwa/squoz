document.querySelector(".burger__btn").addEventListener("click", function () {
  document.querySelector(".burger__btn").classList.toggle("open");
  document.querySelector(".burger__nav").classList.toggle("open");
  document.querySelector("body").classList.toggle("scroll-none");
});
