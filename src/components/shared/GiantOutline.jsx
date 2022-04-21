import React from 'react';

import * as s from 'stylesShared/giant-outline.module.scss';

export default function GiantOutline({ children }) {
  return <div className={s.giantOutline}>{children}</div>;
}
