import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Header.scss';

const Header = ({ name, imageUrl }) => (
  <Link to="./Home">
    <img src={imageUrl} alt={name} />
    <h1>{name}</h1>
  </Link>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Header;
