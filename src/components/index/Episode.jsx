import React from 'react';

import AccentLine from 'components/shared/AccentLine';
import Button from 'components/shared/Button';
import GiantText from 'components/shared/GiantText';
import ScrambleText from 'components/shared/ScrambleText';

import * as s from 'stylesIndex/episode.module.scss';

export default function Episode() {
  return (
    <section className={`section ${s.section}`}>
      <AccentLine />
      <div className="container">
        <div className={s.row}>
          <div className={s.col}>
            <p className={`t-body-large ${s.accentText}`}>
              <ScrambleText>EPISODE_4//ACT II//YR 2</ScrambleText>
            </p>
            <div className={s.giantText}>
              <GiantText color="light" text="Disruption" />
            </div>
            <Button text="Act II Overview" />
          </div>
        </div>
      </div>
    </section>
  );
}
