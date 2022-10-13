import React from 'react';

import * as s from 'stylesShared/header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <p className={s.header__link}>News</p>
      <p className={s.header__link}>Support</p>
    </header>
  );
}

export default Header;
