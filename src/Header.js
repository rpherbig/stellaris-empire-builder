import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
