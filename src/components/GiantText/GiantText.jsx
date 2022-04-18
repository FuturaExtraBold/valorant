import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import * as s from './giant-text.module.scss';

export default function GiantText({ color, size, text }) {
  const el = useRef(null);
  const [animateIn, setAnimateIn] = useState(false);

  function checkScroll() {
    if (window.innerHeight * 0.6 > el.current.getBoundingClientRect().top)
      setAnimateIn(true);
    else setAnimateIn(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });

  const classNames = classnames(s.text, {
    [s.textLight]: color === 'light',
    [s.textSmall]: size === 'small',
    [s.textAnimateIn]: animateIn,
  });

  return (
    <div className={s.giantText} ref={el}>
      <p className={classNames}>{text}</p>
    </div>
  );
}
