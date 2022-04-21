import React, { useEffect, useRef } from 'react';

import AccentLine from 'components/shared/AccentLine';
import Button from 'components/shared/Button';
import GiantOutline from 'components/shared/GiantOutline';
import GiantText from 'components/shared/GiantText';

import parallax from 'javascripts/parallax';

import * as s from 'stylesIndex/maps.module.scss';

export default function Maps() {
  const refSection = useRef(null);
  const refBirds = useRef(null);
  const refGiant = useRef(null);

  function parallaxProxy() {
    parallax(refSection, refGiant, 0.075, -200);
    parallax(refSection, refBirds, -0.1, -150, -0.2, -800);
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxProxy);
    window.addEventListener('resize', parallaxProxy);
    parallaxProxy();
  });

  return (
    <section className={`section ${s.section}`} ref={refSection}>
      <div className={s.giantOutline} ref={refGiant}>
        <GiantOutline>Places</GiantOutline>
      </div>
      <div className={s.birds} ref={refBirds}></div>
      <div className={s.image}></div>
      <AccentLine color="dark" />
      <div className="container">
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.line}></div>
            <div className={s.text}>
              <div className={s.giantText}>
                <GiantText text="Your Maps" />
              </div>
              <p className={`t-body-large ${s.title}`}>
                FIGHT AROUND THE WORLD
              </p>
              <p className={s.body}>
                Each map is a playground to showcase your creative thinking.
                Purpose-built for team strategies, spectacular plays, and clutch
                moments. Make the play others will imitate for years to come.
              </p>
              <Button outline="dark" text="View All Maps" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
