import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <ul className="Footer">
        <li><a
          className="Footer-link"
          href="https://www.rpherbig.com/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Robert Herbig
        </a></li>
        <li><a
          className="Footer-link"
          href="https://github.com/rpherbig/stellaris-empire-builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source available on GitHub
        </a></li>
        <li><a
          className="Footer-link"
          href="https://www.paradoxplaza.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Not affiliated in any way with Paradox Interactive (R)
        </a></li>
      </ul>
    );
  }
}

export default Footer;
