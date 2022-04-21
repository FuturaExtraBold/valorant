import React from 'react';

import AccentLine from 'components/shared/AccentLine';
import AccentVideo from 'components/shared/AccentVideo';
import Button from 'components/shared/Button';
import GiantText from 'components/shared/GiantText';

import videoMP4 from 'videos/gameplay.mp4';

import * as s from 'stylesIndex/gameplay.module.scss';

export default function Gameplay() {
  return (
    <section className={`section ${s.section}`}>
      <AccentLine color="dark" />
      <div className="container">
        <div className={s.line}></div>
        <div className={s.giantText}>
          <GiantText text="We are Valorant" />
        </div>
        <div className={s.row}>
          <div className={s.colText}>
            <div className={s.text}>
              <p className={`t-body-large ${s.title}`}>DEFY THE LIMITS</p>
              <p className={s.body}>
                Blend your style and experience on a global, competitive stage.
                You have 13 rounds to attack and defend your side using sharp
                gunplay and tactical abilities. And, with one life per-round,
                you'll need to think faster than your opponent if you want to
                survive. Take on foes across Competitive and Unranked modes as
                well as Deathmatch and Spike Rush.
              </p>
              <Button outline="dark" text="Learn the Game" />
            </div>
          </div>
          <div className={s.colVideo}>
            <AccentVideo videoMP4={videoMP4} />
          </div>
        </div>
      </div>
    </section>
  );
}
