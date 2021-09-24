let menu = document.querySelectorAll(".Menu-list"),
  item = document.querySelectorAll(".Menu-list-item"),
  w = window.innerWidth,
  h = window.innerHeight;
console.log(item);
window.addEventListener("mousemove", (e) => {
  let offsetX = 0.5 - e.pageX,
    offsetY = 0.5 - e.pageY,
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

  if (angle < 0) {
    angle = angle + 360;
  }

  menu[0].style.transform = transformPoster;

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
