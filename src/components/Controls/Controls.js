import React from 'react';
import PropTypes from 'prop-types';
import withReaderContext from '../withReaderContext/withReaderContext';

const Controls = ({ onPrev, onNext, currentIdx, totalPublications }) => (
  <section className="controls">
    <button
      type="button"
      className="btn"
      onClick={onPrev}
      disabled={currentIdx === 0}
    >
      Назад
    </button>
    <button
      type="button"
      className="btn"
      onClick={onNext}
      disabled={currentIdx === totalPublications - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  currentIdx: PropTypes.number.isRequired,
  totalPublications: PropTypes.number.isRequired,
};

export default withReaderContext(Controls);
