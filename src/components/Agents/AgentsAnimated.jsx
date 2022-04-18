import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './agents-animated.module.scss';

export default function AgentsAnimated() {
  const el = useRef(null);

  function positionAgents() {
    el.current.style.top = window.scrollY * 0.05 + 'px';
  }

  useEffect(() => {
    window.addEventListener('scroll', positionAgents);
    positionAgents();
  });

  return (
    <div className={style.agentsAnimated} ref={el}>
      <StaticImage
        alt="Animated image of Raze and Reyna"
        placeholder="tracedSVG"
        src="../../images/raze-reyna.png"
      />
    </div>
  );
}
