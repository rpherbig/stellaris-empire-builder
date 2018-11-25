import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppearancePanel.css';
import c from './constants';

class AppearancePanel extends Component {
  appearanceOptions = [c.HUMANOID, c.MACHINE, c.MAMMALIAN, c.REPTILIAN, c.AVIAN, c.ARTHROPOD, c.MOLLUSCOID, c.FUNGOID, c.PLANTOID]

  className = (item) => "AppearanceButton " + (this.props.appearance === item ? "Active" : "");

  render() {
    return (
      <div className="AppearancePanel">
        <ul className="List">
            {this.appearanceOptions.map(name =>
              <li key={name}><button className={this.className(name)} onClick={this.props.setAppearance(name)}>{name}</button></li>
            )}
        </ul>
      </div>
    );
  }
}

export default AppearancePanel;

AppearancePanel.propTypes = {
  appearance: PropTypes.string.isRequired,
  setAppearance: PropTypes.func.isRequired
}
