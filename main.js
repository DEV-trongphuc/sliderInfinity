$(document).ready(function () {
  const images = $(".img__item");
  $(".next__btn").on("click", function () {
    let i = Math.floor(images[0].offsetLeft / images[0].offsetWidth);
    if (i <= -(images.length - 1)) i = 1;
    i = (i - 1) * 100;
    images.css("left", `${i}%`);
  });
  $(".prev__btn").on("click", function () {
    let i = Math.floor(images[0].offsetLeft / images[0].offsetWidth);
    if (i === 0) i = -images.length;
    i = (i + 1) * 100;
    images.css("left", `${i}%`);
  });
});
