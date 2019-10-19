import React from 'react';
import PropTypes from 'prop-types';
import css from './Controls.module.css';

const Controls = ({ length, value, handleIncrement, handleDecrement }) => {
  return (
    <section className={css.controls}>
      <button
        type="button"
        disabled={value === 0}
        onClick={handleDecrement}
        className={css.button}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={length - 1 === value}
        onClick={handleIncrement}
        className={css.button}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Controls;
