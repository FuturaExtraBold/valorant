import React from 'react';

import AgentsAnimated from 'components/index/AgentsAnimated';

import AccentLine from 'components/shared/AccentLine';
import Button from 'components/shared/Button';
import GiantText from 'components/shared/GiantText';

import * as s from 'stylesIndex/agents.module.scss';

export default function Agents() {
  return (
    <section className={`section ${s.section}`}>
      <AccentLine />
      <div className={`${s.accent} ${s.accentTopLeft}`}></div>
      <div className={`${s.accent} ${s.accentTopRight}`}></div>
      <div className="container">
        <div className={s.row}>
          <div className={s.col}>
            <AgentsAnimated />
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
              CREATIVITY IS YOUR GREATEST WEAPON.
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
