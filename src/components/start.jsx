import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Link className="button button-start" to="/complimentForm">
      <p className="font-worksans-semi button-start__text">ELOGIAR</p>
    </Link>
  );
};
