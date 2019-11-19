import React from 'react';
import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';

const Item = ({ title, value }) => (
  <li className={s.stats__item}>
    <span className={s.label}>{title}</span>
    <span className={s.quantity}>{value}</span>
  </li>
);

Item.defaultProps = {
  value: 0,
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default Item;
