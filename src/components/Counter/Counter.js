import React from 'react';
import PropTypes from 'prop-types';
import withReaderContext from '../withReaderContext/withReaderContext';

const Counter = ({ currentIdx, totalPublications }) => (
  <p>
    {currentIdx + 1}/{totalPublications}
  </p>
);

Counter.propTypes = {
  currentIdx: PropTypes.number.isRequired,
  totalPublications: PropTypes.number.isRequired,
};

export default withReaderContext(Counter);
