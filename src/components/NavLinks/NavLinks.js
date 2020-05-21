import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavLinks.scss';
import { BACKGROUND_PATH } from '../../constants/paths';

const NavLinks = () => (
  <div>
    <ul>
      <li><Link to={BACKGROUND_PATH}>Background</Link></li>
      <li><Link to="./Services">Services</Link></li>
    </ul>
  </div>
);

NavLinks.propTypes = {
  // navLinks: PropTypes.object, // from enhancer (firestoreConnect + connect)
};

export default NavLinks;
