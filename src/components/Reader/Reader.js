/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import publications from '../../publications.json';

import css from './Reader.module.css';

class Reader extends Component {
  state = { value: 0 };

  componentDidUpdate(prevProps, prevState) {
    const { history, location } = this.props;
    const { value } = this.state;

    if (prevState.value !== value) {
      history.push({
        ...location,
        search: `?item=${value + 1}`,
      });
    }
  }

  handleIncrement = () => {
    if (this.state.value === publications.length - 1) {
      return;
    }
    this.setState(state => ({
      value: state.value + 1,
    }));
  };

  handleDecrement = () => {
    if (this.state.value === 0) {
      return;
    }
    this.setState(state => ({
      value: state.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.reader}>
        <Counter
          value={value}
          length={publications.length}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <Publication items={publications[value]} />
      </div>
    );
  }
}

export default Reader;
