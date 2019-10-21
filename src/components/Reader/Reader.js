/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import queryString from 'query-string';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import publications from '../../publications.json';

import css from './Reader.module.css';

class Reader extends Component {
  state = { value: 1 };

  componentDidMount() {
    const { history, location } = this.props;
    const { value } = this.state;

    const parsed = Number(queryString.parse(location.search).item);

    if (parsed > publications.length || isNaN(parsed)) {
      history.push({
        path: '/reader',
        search: `?item=1`,
      });
    } else if (parsed !== value) {
      this.setState({
        value: parsed,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    const { value } = this.state;
    if (prevState.value !== value) {
      history.push({
        path: '/reader',
        search: `?item=${value}`,
      });
    }
  }

  handleIncrement = () => {
    const { value } = this.state;
    if (value === publications.length) {
      return;
    }
    this.setState(state => ({
      value: state.value + 1,
    }));
  };

  handleDecrement = () => {
    const { value } = this.state;
    if (value === 1) {
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
          value={value - 1}
          length={publications.length}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <Publication items={publications[value - 1]} />
      </div>
    );
  }
}

export default Reader;
