import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import AccentLine from 'components/shared/AccentLine';
import Button from 'components/shared/Button';

import videoMP4 from 'videos/hero.mp4';

import * as s from 'stylesIndex/hero.module.scss';

export default function Hero() {
  return (
    <section className={`section ${s.section}`}>
      <div className={s.videoContainer}>
        <video
          autoPlay="autoplay"
          className={s.video}
          loop={true}
          muted={true}
          playsInline={true}
          preload="true"
        >
          <source src={videoMP4} type="video/mp4" />
        </video>
      </div>
      <AccentLine />
      <div className={`container ${s.container}`}>
        <p className={s.body}>A 5v5 character-based tactical shooter</p>
        <div className={s.logo}>
          <StaticImage
            alt="Valorant logo"
            placeholder="tracedSVG"
            src="../../images/logo.svg"
          />
        </div>
        <Button text="Play Free" />
      </div>
    </section>
  );
}
