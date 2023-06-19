import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} aria-label="Load more">
      Load more...
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
