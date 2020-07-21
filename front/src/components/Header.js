import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return (
    <div className="Header">
      <h2 className="text-center"> {message} </h2>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string
};

export default Header;
