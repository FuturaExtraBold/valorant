import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import AccentLine from 'components/shared/AccentLine';
import Button from 'components/shared/Button';
import GiantText from 'components/shared/GiantText';

import parallax from 'javascripts/parallax';

import * as s from 'stylesIndex/agents.module.scss';

export default function Agents() {
  const refSection = useRef(null);
  const refTexture = useRef(null);
  const refAgents = useRef(null);

  function parallaxProxy() {
    parallax(refSection, refTexture, 0.1);
    parallax(refSection, refAgents, -0.1);
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxProxy);
    parallaxProxy();
  });

  return (
    <section className={`section ${s.section}`} ref={refSection}>
      <AccentLine />
      <div className={s.texture} ref={refTexture}></div>
      <div className={`${s.accent} ${s.accentTopLeft}`}></div>
      <div className={`${s.accent} ${s.accentTopRight}`}></div>
      <div className="container">
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.agents} ref={refAgents}>
              <StaticImage
                alt="Animated image of Raze and Reyna"
                placeholder="tracedSVG"
                src="../../images/raze-reyna.png"
              />
            </div>
          </div>
          <div className={s.col}>
            <div className={s.line}></div>
            <GiantText
              color="light"
              text={
                <>
                  Your
                  <br />
                  Agents
                </>
              }
            />
            <p className={`t-body-large ${s.title}`}>
              CREATIVITY IS YOUR GREATEST WEAPON
            </p>
            <p className={s.body}>
              More than guns and bullets, you’ll choose an Agent armed with
              adaptive, swift, and lethal abilities that create opportunities to
              let your gunplay shine. No two Agents play alike, just as no two
              highlight reels will look the same.
            </p>
            <Button text="View All Agents" type="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
