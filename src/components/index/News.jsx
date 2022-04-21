import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import NewsItem from 'components/index/NewsItem';

import AccentLine from 'components/shared/AccentLine';
import GiantOutline from 'components/shared/GiantOutline';
import GiantText from 'components/shared/GiantText';

import parallax from 'javascripts/parallax';

import * as s from 'stylesIndex/news.module.scss';

export default function News() {
  const refSection = useRef(null);
  const refElement = useRef(null);

  function parallaxProxy() {
    parallax(refSection, refElement, 0.075);
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxProxy);
    parallaxProxy();
  });

  return (
    <section className={`section ${s.section}`} ref={refSection}>
      <div className={s.giantOutline} ref={refElement}>
        <GiantOutline>
          We are
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Valorant
        </GiantOutline>
      </div>
      <AccentLine color="dark" />
      <div className="container">
        <div className={s.giantText}>
          <GiantText color="accent" size="small" text="Latest News" />
        </div>
        <div className={s.row}>
          <div className={s.col}>
            <NewsItem
              category="Game Updates"
              date="4/20/22"
              image={
                <StaticImage alt="Jett Changes" src="../../images/news/1.jpg" />
              }
              title="Valorant Jett Changes for Patch Notes 4.08"
            />
          </div>
          <div className={s.col}>
            <NewsItem
              category="Announcements"
              date="4/20/22"
              image={
                <StaticImage
                  alt="New Agent: Fade"
                  src="../../images/news/2.jpg"
                />
              }
              title="New agent: Fade reveal at Masters finals"
            />
          </div>
          <div className={s.col}>
            <NewsItem
              category="Game Updates"
              date="4/20/22"
              image={
                <StaticImage
                  alt="Gameplay consistency update"
                  src="../../images/news/3.jpg"
                />
              }
              title="Valorant gameplay consistency update"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
