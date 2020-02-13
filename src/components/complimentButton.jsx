import React from 'react';

export default ({ selected, source, name, callback, text }) => (
  <div onClick={e => callback(e)} data-name={name} className={`button button-compliment ${selected === name ? 'h-selected' : null}`}>
    <img className="button-compliment__image" alt={name} src={source} />
    <p className="font-worksans-medium button-compliment__text">
      { text }
    </p>
  </div>
);
