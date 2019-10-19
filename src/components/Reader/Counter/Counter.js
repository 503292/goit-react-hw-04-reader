import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Counter.module.css';
import Controls from '../Controls/Controls';

export default class Counter extends Component {
  state = {};

  render() {
    const { length, value, handleIncrement, handleDecrement } = this.props;
    return (
      <>
        <Controls
          value={value}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          length={length}
        />
        <p className={css.counter}>
          {value + 1}/{length}
        </p>
      </>
    );
  }
}

Counter.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
