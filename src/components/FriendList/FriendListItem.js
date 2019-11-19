import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span
      className={`${s.status} ${isOnline ? s.statusActive : s.statusInactive}`}
    />
    <img className={s.avatar} src={avatar} alt="" width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: '',
  name: '',
  isOnline: true,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
