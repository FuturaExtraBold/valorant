import React, { useEffect, useRef } from 'react';

import * as s from 'stylesIndex/parallax.module.scss';

export default function Parallax() {
  const refSection = useRef(null);
  const refBox = useRef(null);

  let diff, ec, sc, sy, wc;

  function checkPos() {
    wc = window.outerHeight / 2;
    sc = refSection.current.offsetHeight / 2;
    sy = refSection.current.getBoundingClientRect().top;
    ec = refBox.current.offsetHeight / 2;
    diff = sy + sc - wc;

    // console.log('diff:', sy + sc - wc);

    refBox.current.style.top = sc - ec - diff * -0.1 + 'px';
  }

  useEffect(() => {
    window.addEventListener('scroll', checkPos);
    checkPos();
  });

  return (
    <section className={`section ${s.section}`} ref={refSection}>
      <div className={s.box} ref={refBox}></div>
      <div className={s.center}></div>
    </section>
  );
}
