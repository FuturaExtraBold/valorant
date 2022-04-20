import React from 'react';
import classnames from 'classnames';

import * as s from 'stylesShared/accent-line.module.scss';

export default function AccentLine({ color }) {
  const classNames = classnames(s.line, {
    [s.lineDark]: color === 'dark',
  });
  return <div className={classNames}></div>;
}
