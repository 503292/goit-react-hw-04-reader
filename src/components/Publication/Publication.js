/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withReaderContext from '../withReaderContext/withReaderContext';

const Publication = ({ publication }) => {
  const { title, text } = publication;

  return (
    <article className="publication">
      <h2>{title.slice(0, 20)}...</h2>
      <p>{text.slice(0, 300)}...</p>
    </article>
  );
};
Publication.propTypes = {
  publication: PropTypes.shape({}).isRequired,
};

export default withReaderContext(Publication);
