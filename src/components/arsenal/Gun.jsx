import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import GiantText from 'components/shared/GiantText';

import * as s from 'stylesArsenal/gun.module.scss';

export default function Gun({ data }) {
  const img = getImage(data.image);

  return (
    <div className={s.gun}>
      <GiantText size="xs" text={`${data.name}.`} />
      <GatsbyImage
        alt={data.name}
        className={s.image}
        image={img}
        loading="eager"
        placeholder="tracedSVG"
        transformOptions={{
          rotate: '30',
        }}
      />
      <p className={s.text}>{data.description}</p>
    </div>
  );
}
