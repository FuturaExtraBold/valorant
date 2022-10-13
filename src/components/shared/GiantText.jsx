import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import * as s from 'stylesShared/giant-text.module.scss';

const GiantText = ({ color, size, text }) => {
  const el = useRef(null);
  const [animateIn, setAnimateIn] = useState(false);

  function checkScroll() {
    if (window.innerHeight * 0.6 > el.current.getBoundingClientRect().top)
      setAnimateIn(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });

  const classNames = classnames(s.text, {
    [s.textLight]: color === 'light',
    [s.textAccent]: color === 'accent',
    [s.textSm]: size === 'sm',
    [s.textXs]: size === 'xs',
    [s.textAnimateIn]: animateIn,
  });

  return (
    <div className={s.giantText} ref={el}>
      <p className={classNames}>{text}</p>
    </div>
  );
};

export default GiantText;
