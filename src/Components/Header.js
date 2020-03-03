import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

import './Header.css';

const Header = () => (
  <nav className="navbar fixed-top navbar-color">
    <Container className="justify-content-center">
      <span className="header-span navbar-brand">
        <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
        </span>
        <span className="header-span">Just Another Todo App</span>
    </Container>
  </nav>
);

export default Header;
