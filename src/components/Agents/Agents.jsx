import React from 'react';

import GiantText from '../GiantText/GiantText';

import * as style from './agents.module.scss';

export default function Agents() {
  return (
    <section className={style.agents}>
      <div className="container">
        <div className={style.row}>
          <div className={style.col}>
            <h1>Agents</h1>
          </div>
          <div className={style.col}>
            <GiantText color="light" text={['Your', <br />, 'Agents']} />
          </div>
        </div>
      </div>
    </section>
  );
}
