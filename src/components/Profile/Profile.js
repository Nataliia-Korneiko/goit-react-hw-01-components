import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';
import Item from '../Item/Item';

const Profile = props => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={props.user.avatar} alt="user avatar" className={s.avatar} />
      <p className={s.name}>{props.user.name}</p>
      <p className={s.tag}>{`@${props.user.tag}`}</p>
      <p className={s.location}>{props.user.location}</p>
    </div>

    <ul className={s.stats}>
      <Item title="Followers" value={props.user.stats.followers} />
      {/* <li className={s.stats__item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{props.user.stats.followers}</span>
      </li> */}
      <Item title="Views" value={props.user.stats.views} />
      {/* <li className={s.stats__item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{props.user.stats.views}</span>
      </li> */}
      <Item title="Likes" value={props.user.stats.likes} />
      {/* <li className={s.stats__item}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{props.user.stats.likes}</span>
      </li> */}
    </ul>
  </div>
);

Profile.defaultProps = {
  name: '',
  tag: '',
  location: '',
  avatar: '',
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default Profile;
