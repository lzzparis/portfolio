import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavLinks.scss';
import {
  BACKGROUND_PATH,
  CONTACT_PATH,
  PROJECTS_PATH,
  SERVICES_PATH,
  TESTOMONIALS_PATH,
} from '../../constants/paths';

const NavLinks = () => (
  <div>
    <ul>
      <li><Link to={BACKGROUND_PATH}>Background</Link></li>
      <li><Link to={SERVICES_PATH}>Services</Link></li>
      <li><Link to={PROJECTS_PATH}>Projects</Link></li>
      <li><Link to={TESTOMONIALS_PATH}>Testomonials</Link></li>
      <li><Link to={CONTACT_PATH}>Contact</Link></li>
    </ul>
  </div>
);

NavLinks.propTypes = {
  // navLinks: PropTypes.object, // from enhancer (firestoreConnect + connect)
};

export default NavLinks;
