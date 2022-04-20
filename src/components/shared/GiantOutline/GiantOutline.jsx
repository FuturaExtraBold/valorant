import React, { useEffect, useRef } from 'react';
import * as s from './giant-outline.module.scss';

export default function GiantOutline() {
  const el = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      el.current.style.top = window.scrollY * 0.05 + 'px';
    });
  });

  return (
    <div className={s.giantOutline} ref={el}>
      We are
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;Valorant
    </div>
  );
}
