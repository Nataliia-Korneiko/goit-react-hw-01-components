import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
    <ul className={s.stat__list}>
      {stats.map(el => (
        <li
          key={el.id}
          className={s.item}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{`${el.percentage}%`}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: 'Upload Stats',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
