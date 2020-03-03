import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => (
  <div>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span navbar-brand">
          <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
        </span>
        <span className="header__span">Just Another Todo App</span>
      </nav>
    </div>
  </div>
);

export default Header;
