import React from 'react';
import PropTypes from 'prop-types';
import withReaderContext from '../withReaderContext/withReaderContext';

const Controls = ({ onPrev, onNext }) => (
  <section className="controls">
    <button type="button" className="btn" onClick={onPrev}>
      Назад
    </button>
    <button type="button" className="btn" onClick={onNext}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default withReaderContext(Controls);
