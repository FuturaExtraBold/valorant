import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import NewsItem from 'components/pages/index/News/NewsItem';

import AccentLine from 'components/shared/AccentLine/AccentLine';
import GiantOutline from 'components/shared/GiantOutline/GiantOutline';
import GiantText from 'components/shared/GiantText/GiantText';

import * as s from './news.module.scss';

export default function News() {
  return (
    <section className={`section ${s.section}`}>
      <GiantOutline />
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
                <StaticImage
                  alt="Jett Changes"
                  src="../../../../images/news/1.jpg"
                />
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
                  src="../../../../images/news/2.jpg"
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
                  src="../../../../images/news/3.jpg"
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
