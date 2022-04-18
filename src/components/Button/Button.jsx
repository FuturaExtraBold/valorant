import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as s from './button.module.scss';

export default function Button({ text, type }) {
  const classNames = classnames(s.btn, {
    [s.btnSecondary]: type === 'secondary',
  });
  return (
    <div className={classNames}>
      <div className={`${s.btnOutline} ${s.btnTop}`}></div>
      <div className={s.btnContent}>
        <div className={s.btnOverlay}></div>
        <div className={s.btnText}>{text}</div>
        <div className={`${s.btnAccent} ${s.btnAccent1}`}></div>
        <div className={`${s.btnAccent} ${s.btnAccent2}`}></div>
      </div>
      <div className={`${s.btnOutline} ${s.btnBottom}`}></div>
    </div>
  );
}

Button.defaultProps = {
  type: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
