import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={s.friend__list}>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        isOnline={el.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
