let menu = document.querySelectorAll(".Menu-list"),
  item = document.querySelectorAll(".Menu-list-item"),
  w = window.innerWidth,
  h = window.innerHeight;
console.log(item);
window.addEventListener("mousemove", (e) => {
  let offsetX = 0.75 - e.clientX / 1000,
    offsetY = 0.5 - e.clientY / 1000,
    dx = e.pageX - w / 2,
    dy = e.pageY - h / 2,
    theta = Math.atan2(dy, dx),
    angle = (theta * 180) / Math.PI - 90,
    offsetPoster = menu[0].dataset.offset;
  transformPoster =
    "translate3d(0, " +
    -offsetX * offsetPoster +
    "px, 0) rotateX(" +
    -offsetY * offsetPoster +
    "deg) rotateY(" +
    offsetX * (offsetPoster * 2) +
    "deg)";
  console.log(offsetX, offsetY);
  angle < 0 ? angle + 360 : angle;

  menu[0].style.transform = transformPoster;
  console.log(menu[0].style.transform);
  item.forEach((el) => {
    let offsetLayer = el.dataset.offset,
      transfromLayer =
        "translate3d(" +
        offsetX * offsetLayer +
        "px, " +
        offsetY * offsetLayer +
        "px, 20px)";

    el.style.transform = transfromLayer;
  });
});
