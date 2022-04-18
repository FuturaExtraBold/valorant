import React from 'react';

import AgentsAnimated from './AgentsAnimated';
import Button from '../Button/Button';
import GiantText from '../GiantText/GiantText';

import * as s from './agents.module.scss';

export default function Agents() {
  return (
    <section className={s.agents}>
      <div className="container">
        <div className={s.row}>
          <div className={s.col}>
            <AgentsAnimated />
          </div>
          <div className={s.col}>
            <GiantText color="light" text={['Your', <br />, 'Agents']} />
            <p className={`body--large ${s.title}`}>
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
