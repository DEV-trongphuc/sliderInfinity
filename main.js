const $ = document.querySelectorAll.bind(document);
const images = $(".slider__item");
$(".next__btn")[0].onclick = () => {
  let i = Math.floor(images[0].offsetLeft / images[0].offsetWidth);
  if (i <= -(images.length - 1)) i = 1;
  i = (i - 1) * 100;
  images.forEach((image) => (image.style.left = i + "%"))};
$(".prev__btn")[0].onclick = () => {
  let i = Math.floor(images[0].offsetLeft / images[0].offsetWidth);
  if (i === 0) i = -images.length;
  i = (i + 1) * 100;
  images.forEach((image) => (image.style.left = i + "%"))};
