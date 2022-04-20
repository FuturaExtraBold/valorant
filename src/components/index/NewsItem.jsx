import React from 'react';
import PropTypes from 'prop-types';

import * as s from 'stylesIndex/news-item.module.scss';

export default function NewsItem({ category, date, image, title }) {
  return (
    <div className={s.item}>
      <div className={s.image}>{image}</div>
      <div className={s.info}>
        <span className={`t-body-small ${s.date}`}>{date}</span>
        <span className={`t-body-small ${s.category}`}>{category}</span>
      </div>
      <p className={`t-body-large ${s.title}`}>{title}</p>
    </div>
  );
}

NewsItem.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
