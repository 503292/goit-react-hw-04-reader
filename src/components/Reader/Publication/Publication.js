import React from 'react';
import PropTypes from 'prop-types';
import css from './Publication.module.css';

const Publication = ({ items }) => (
  <article key={items.id} className={css.publication}>
    <h2>{items.title}</h2>
    <p>{items.text}</p>
  </article>
);

Publication.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Publication;
