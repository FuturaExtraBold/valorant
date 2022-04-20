import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import AccentLine from 'components/shared/AccentLine';

import * as s from 'stylesIndex/hero.module.scss';

export default function Hero() {
  return (
    <section className={`section ${s.section}`}>
      <AccentLine color="dark" />
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
