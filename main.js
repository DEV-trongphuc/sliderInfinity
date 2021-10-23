const $ = document.querySelectorAll.bind(document);
const images = $(".slider__item");
$(".next__btn")[0].onclick = () => {
  let i = Math.floor(images[0].offsetLeft / images[0].offsetWidth);
  if (i <= -(images.length - 1)) i = 1;
  i = i - 1;
  images.forEach((image) => (image.style.left = i * 100 + "%"));
  $(".dot__item.active")[0].classList.remove("active");
  $(".dot__item")[-i].classList.add("active");
};
$(".prev__btn")[0].onclick = () => {
  let i = Math.ceil(images[0].offsetLeft / images[0].offsetWidth);
  if (i === 0) i = -images.length;
  i = i + 1;
  images.forEach((image) => (image.style.left = i * 100 + "%"));
  $(".dot__item.active")[0].classList.remove("active");
  $(".dot__item")[-i].classList.add("active");
};
$(".dot__item").forEach((dot, index) => {
  dot.onclick = () => {
    $(".dot__item.active")[0].classList.remove("active");
    dot.classList.add("active");
    images.forEach((image) => (image.style.left = -index * 100 + "%"));
  };
});

setInterval(()=> {$(".next__btn")[0].click() },8000)
