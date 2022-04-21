let diff, ec, sc, sy, wc;

export default function parallax(
  rS,
  rE,
  speed = 0.1,
  offset = 0,
  xSpeed = null,
  xOffset = null
) {
  wc = window.outerHeight / 2;
  sc = rS.current.offsetHeight / 2;
  sy = rS.current.getBoundingClientRect().top;
  ec = rE.current.offsetHeight / 2;
  diff = sy + sc - wc;

  console.log('diff:', sy + sc - wc);

  rE.current.style.top = sc - ec - diff * speed + offset + 'px';
  if (xSpeed && xOffset) {
    console.log('kablammo');
    rE.current.style.left =
      window.outerWidth - sc - ec - diff * xSpeed + xOffset + 'px';
  }
}
