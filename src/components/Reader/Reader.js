import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ReaderContext = createContext();

class Reader extends Component {
  static Consumer = ReaderContext.Consumer;

  state = {
    currentIdx: 0,
    publication: this.props.items[0],
    totalPublications: this.props.items.length,
  };

  handlePrev = () => {
    this.setState(state => ({
      currentIdx: state.currentIdx - 1,
      publication: this.props.items[state.currentIdx - 1],
    }));
  };

  handleNext = () => {
    this.setState(state => ({
      currentIdx: state.currentIdx + 1,
      publication: this.props.items[state.currentIdx + 1],
    }));
  };

  render() {
    const { children } = this.props;
    const { currentIdx, totalPublications } = this.state;
    return (
      <ReaderContext.Provider
        value={{
          ...this.state,
          onPrev: this.handlePrev,
          onNext: this.handleNext,
          currentIdx,
          totalPublications,
        }}
      >
        <div className="reader">{children}</div>
      </ReaderContext.Provider>
    );
  }
}

Reader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Reader;
