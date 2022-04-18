import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as s from './hero.module.scss';

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={`container ${s.container}`}>
        <StaticImage
          alt="Valorant logo"
          placeholder="tracedSVG"
          src="../../images/logo.svg"
        />
      </div>
    </section>
  );
}
